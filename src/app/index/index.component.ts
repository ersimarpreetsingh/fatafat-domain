import { FavDomain } from './../modals/api-types';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Domain, GeneratedDomain, SaleDomain } from '../modals/api-types';
import { ApiService } from '../api.service';
import { Location } from '@angular/common';
import { MetadataServiceService } from '../metadata-service.service';

declare var $: any;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, AfterViewChecked {
  jqueryBinded = false;
  domainData: Domain[] = [];
  generatedDomains: GeneratedDomain[] = [];
  saleDomains: SaleDomain[] = [];
  initSaleDomains: SaleDomain[] = [];
  favDomains: FavDomain[] = [];
  public keyword = '';
  comDomain: Domain;
  mobileActiveExtensions = true;
  mobileActiveGenerator = false;
  mobileActiveForsale = false;

  domainApiSubscription: Subscription;
  genDomainApiSubscription: Subscription;
  comDomainApiSubscription: Subscription;
  saleDomainApiSubscription: Subscription;

  loading = false;
  genLoading = false;
  comLoading = false;
  saleLoading = false;

  showDomainMenu = false;
  showFavMenu = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    public apiService: ApiService,
    private location: Location,
    private metaService: MetadataServiceService
  ) {
    this.keyword = apiService.keyword;
  }

  ngOnInit() {
    this.apiService.translatingVar = this.activatedRoute.snapshot.url[0] &&
    this.activatedRoute.snapshot.url[0].path && this.activatedRoute.snapshot.url[0].path.length > 0
    ? this.activatedRoute.snapshot.url[0].path
    : 'en';
    window.sessionStorage.setItem('transCode', this.apiService.translatingVar);
    this.apiService.currentTranslation = this.apiService.translations.find(trans => trans.code === this.apiService.translatingVar);
    this.metaService.metaActiveData = this.metaService.metaData.find(meta => meta.code === this.apiService.translatingVar);
    $('title').html(this.metaService.metaActiveData.data.title);
    $('meta[name="description"]').attr('content', this.metaService.metaActiveData.data.description);
    $(document).ready(() => {
      $('app-root div').first().removeClass('results-page');
      if (!($('header').hasClass('home'))) {
        $('header').addClass('home');
      }

      $('body').click(() => {
        $('#favMenu').removeClass('show');
        $('.language-dropdown #drop_btn').removeClass('open');
        $('.language-dropdown .dropdown').removeClass('show');
        $('#domainMenu').removeClass('show');
      });
    });

    this.favDomains = window.localStorage.getItem('favDom')
    ? JSON.parse(window.localStorage.getItem('favDom'))
    : [];
    if (window.location.href.split('=').length > 1) {
      this.keyword = window.location.href.split('=')[1];
      this.getDomainData();
    } else if (this.apiService.keyword && this.apiService.keyword.length > 0) {
      this.keyword = this.apiService.keyword;
      this.getDomainData();
    }
  }

  ngAfterViewChecked() {
    if (!this.jqueryBinded && this.keyword.length > 0) {
      this.jqueryBinded = true;
      $('.shotlist').click((event) => {
        if ($('#favMenu').hasClass('show')) {
          $('#favMenu').removeClass('show');
        } else {
          $('.language-dropdown .dropdown').removeClass('show');
          $('#domainMenu').removeClass('show');
          $('#favMenu').addClass('show');
        }
        event.stopPropagation();
      });
      $('#domainMenuBtn').click((event) => {
        if ($('#domainMenu').hasClass('show')) {
          $('#domainMenu').removeClass('show');
        } else {
          $('.language-dropdown .dropdown').removeClass('show');
          $('#favMenu').removeClass('show');
          $('#domainMenu').addClass('show');
        }
        event.stopPropagation();
      });
    }
  }

  getDomainData() {
    this.apiService.keyword = this.keyword;
    this.loading = true;
    this.comLoading = true;
    this.saleLoading = true;
    if (this.domainApiSubscription) {
      this.domainApiSubscription.unsubscribe();
      this.domainData = [];
    }
    if (this.genDomainApiSubscription) {
      this.genDomainApiSubscription.unsubscribe();
    }
    if (this.comDomainApiSubscription) {
      this.comDomainApiSubscription.unsubscribe();
    }
    if (this.saleDomainApiSubscription) {
      this.saleDomainApiSubscription.unsubscribe();
    }
    if (this.keyword && this.keyword.length > 1) {
      this.comDomainApiSubscription = this.apiService
        .getComInfo(this.keyword)
        .subscribe(res => {
          this.comDomain = res;
          this.comDomain.link = res.avialability ? `${this.apiService.truelink}${res.keyword}${res.tld}`
          : `${this.apiService.falselink}${res.keyword}${res.tld}`;
          this.comLoading = false;
        });
      this.domainApiSubscription = this.apiService
        .getDomains(this.keyword, true)
        .subscribe(res => {
          this.domainData = res;
          this.domainData.forEach(data => {
            data.link = data.avialability
              ? `${this.apiService.truelink}${data.keyword}${data.tld}`
              : `${this.apiService.falselink}${data.keyword}${data.tld}`;
          });
          this.loading = false;
          if (this.apiService.translatingVar === 'en') {
            this.location.replaceState(`/?search=${this.keyword}`);
          } else {
            this.location.replaceState(`/${this.apiService.translatingVar}?search=${this.keyword}`);
          }
        });
      this.genDomainApiSubscription = this.apiService
        .getGenerator(this.keyword, true)
        .subscribe(res => {
          this.generatedDomains = res;
          this.generatedDomains.forEach(data => {
            data.link = data.avialability
              ? `${this.apiService.truelink}${data.keyword}${data.tld}`
              : `${this.apiService.falselink}${data.keyword}${data.tld}`;
          });
          this.genLoading = false;
        });
      this.saleDomainApiSubscription = this.apiService
        .getForSale(this.keyword, true)
        .subscribe(res => {
          this.saleDomains = res.data;
          this.saleLoading = false;
        });
    } else {
      this.domainData = [];
      this.generatedDomains = [];
      this.loading = false;
      this.genLoading = false;
      if (this.apiService.translatingVar === 'en') {
        this.location.replaceState(`/`);
      } else {
        this.location.replaceState(`/${this.apiService.translatingVar}`);
      }
    }
  }

  isAvail(tld: string): boolean {
    let currentDomain: Domain;
    if (this.domainData && this.domainData.length) {
      currentDomain =
        this.domainData && this.domainData.length > 0
          ? this.domainData.find(
            domain => domain.tld.toLowerCase() === tld.toLowerCase()
          )
          : null;
    }
    return currentDomain ? !currentDomain.avialability : !false;
  }

  getLinkForDomain(tld: string): string {
    if (this.domainData && this.domainData.length) {
      if (
        this.domainData.findIndex(
          domain => domain.tld.toLowerCase() === tld.toLowerCase()
        ) > -1
      ) {
        return this.domainData.find(
          domain => domain.tld.toLowerCase() === tld.toLowerCase()
        ).link;
      }
      return '';
    }
    return '';
  }
  clearKeyword() {
    this.jqueryBinded = false;
    this.keyword = '';
    this.apiService.keyword = this.keyword;
    if (this.apiService.translatingVar === 'en') {
      this.location.replaceState(`/`);
    } else {
      this.location.replaceState(`/${this.apiService.translatingVar}`);
    }
  }
  toggleDomainMenu() {
    this.showDomainMenu = !this.showDomainMenu;
  }

  toggleFavMenu() {
    this.showFavMenu = !this.showFavMenu;
  }

  addDomToFav(tld: string) {
    if (this.domainData && this.domainData.length) {
      const currentDomain: Domain = this.domainData.find(
        domain => domain.tld.toLowerCase() === tld.toLowerCase()
      );
      if (
        this.favDomains.findIndex(
          dom =>
            dom.keyword.toLowerCase() ===
            (currentDomain.keyword + currentDomain.tld).toLowerCase()
        ) < 0
      ) {
        this.favDomains.push({
          keyword: `${currentDomain.keyword}${currentDomain.tld}`,
          link: currentDomain.link
        });
      }
      window.localStorage.clear();
      window.localStorage.setItem('favDom', JSON.stringify(this.favDomains));
    }
  }
  addGenToFav(keyword: string, link: string) {
    if (this.generatedDomains && this.generatedDomains.length) {
      const currentDomain: GeneratedDomain = this.generatedDomains.find(
        domain => (domain.keyword + domain.after + domain.tld).toLowerCase() === keyword.toLowerCase()
      );
      if (
        this.favDomains.findIndex(
          dom =>
            dom.keyword.toLowerCase() ===
            (currentDomain.keyword + currentDomain.after + currentDomain.tld).toLowerCase()
        ) < 0
      ) {
        this.favDomains.push({
          keyword,
          link
        });
      }
      window.localStorage.clear();
      window.localStorage.setItem('favDom', JSON.stringify(this.favDomains));
    }
  }
  addSaleToFav(keyword: string, link: string) {
    if (this.saleDomains && this.saleDomains.length) {
      const currentDomain: SaleDomain = this.saleDomains.find(domain => domain.keyword.toLowerCase() === keyword.toLowerCase());
      if (this.favDomains.findIndex(dom => dom.keyword.toLowerCase() === (currentDomain.keyword).toLowerCase()) < 0) {
        this.favDomains.push({
          keyword,
          link
        });
      }
      window.localStorage.clear();
      window.localStorage.setItem('favDom', JSON.stringify(this.favDomains));
    }
  }
  removeFromFav(keyword: string) {
    this.favDomains = this.favDomains.filter(dom => !(dom.keyword === keyword));
    window.localStorage.clear();
    window.localStorage.setItem('favDom', JSON.stringify(this.favDomains));
  }
  isFavrouite(keyword: string) {
    return (
      this.favDomains.findIndex(
        dom => dom.keyword.toLowerCase() === keyword.toLowerCase()
      ) > -1
    );
  }

  mobileTabToggle(tabName: string) {
    switch (tabName) {
      case 'extensions': {
        this.mobileActiveExtensions = true;
        this.mobileActiveGenerator = false;
        this.mobileActiveForsale = false;
        break;
      }
      case 'generator': {
        this.mobileActiveGenerator = true;
        this.mobileActiveForsale = false;
        this.mobileActiveExtensions = false;
        break;
      }
      case 'forsale': {
        this.mobileActiveForsale = true;
        this.mobileActiveGenerator = false;
        this.mobileActiveExtensions = false;
        break;
      }
    }
  }

  registerFavJquery() {
    $(document).ready(() => {
      $('.shotlist').click((event) => {
        if ($('#favMenu').hasClass('show')) {
          $('#favMenu').removeClass('show');
        } else {
          $('#favMenu').addClass('show');
        }
        event.stopPropagation();
      });
    });
  }
}
