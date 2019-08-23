import { MetadataServiceService } from './../metadata-service.service';
import { ApiService } from './../api.service';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { FavDomain, Domain, SaleDomain } from '../modals/api-types';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-extensions',
  templateUrl: './extensions.component.html',
  styleUrls: ['./extensions.component.css']
})
export class ExtensionsComponent implements OnInit, AfterViewChecked {
  jqueryBinded = false;
  public keyword = '';
  showFavMenu = false;
  favDomains: FavDomain[] = [];
  domainData: Domain[] = [];

  genDomainApiSubscription: Subscription;

  loading = false;
  constructor(public apiService: ApiService, private location: Location, private activatedRoute: ActivatedRoute,
              private metaService: MetadataServiceService) {
    this.keyword = apiService.keyword;
    if (this.apiService.allTldList && this.apiService.allTldList.length < 1) {
      this.apiService.getTldList(false).subscribe(res => {
        this.apiService.allTldList = res;
        this.apiService.getTldCats().subscribe(resp => {
          this.apiService.tldCats = resp;
        });
      });
    }
  }

  ngOnInit() {
    this.apiService.translatingVar = this.activatedRoute.snapshot.url[0] &&
    this.activatedRoute.snapshot.url[0].path && this.activatedRoute.snapshot.url[0].path.length > 0
    ? ((this.activatedRoute.snapshot.url[0].path !== 'sale'
    && this.activatedRoute.snapshot.url[0].path !== 'generator'
    && this.activatedRoute.snapshot.url[0].path !== 'extensions')
    ? this.activatedRoute.snapshot.url[0].path
    : 'en')
    : 'en';
    window.sessionStorage.setItem('transCode', this.apiService.translatingVar);
    this.apiService.currentTranslation = this.apiService.translations.find(trans => trans.code === this.apiService.translatingVar);
    this.metaService.metaActiveData = this.metaService.metaData.find(meta => meta.code === this.apiService.translatingVar);
    $('title').html(this.metaService.metaActiveData.data.extensionsTitle);
    $('meta[name="description"]').attr('content', this.metaService.metaActiveData.data.extensionsDescription);
    $(document).ready(() => {
      $('app-root div').first().removeClass('results-page');
      if (!($('header').hasClass('home'))) {
        $('header').addClass('home');
      }
      // $('.language-dropdown #drop_btn').unbind();
      // $('.language-dropdown #drop_btn').click((event) => {
      //   if ($('.language-dropdown .dropdown').hasClass('show')) {
      //     $('.language-dropdown .dropdown').removeClass('show');
      //   } else {
      //     $('.language-dropdown .dropdown').addClass('show');
      //     $('#favMenu').removeClass('show');
      //   }
      //   event.stopPropagation();
      // });
      $('body').click(() => {
        $('#favMenu').removeClass('show');
        $('.language-dropdown #drop_btn').removeClass('open');
        $('.language-dropdown .dropdown').removeClass('show');
      });
    });


    this.favDomains = window.localStorage.getItem('favDom') ? JSON.parse(window.localStorage.getItem('favDom')) : [];
    if (window.location.href.split('=').length > 1) {
      this.keyword = window.location.href.split('=')[1];
      this.getDomainData();
    } else if (this.apiService.keyword && this.apiService.keyword.length > 1) {
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
          $('#favMenu').addClass('show');
        }
        event.stopPropagation();
      });
    }
  }

  getDomainData() {
    this.apiService.keyword = this.keyword;
    if (this.genDomainApiSubscription) {
      this.genDomainApiSubscription.unsubscribe();
      this.domainData = [];
    }
    if (this.keyword && this.keyword.length > 0) {
      this.genDomainApiSubscription = this.apiService.getDomains(this.keyword, false).subscribe(res => {
        this.domainData = res;
        this.domainData.forEach(data => {
          data.link = data.avialability ?
            `${this.apiService.truelink}${data.keyword}${data.tld}` :
            `${this.apiService.falselink}${data.keyword}${data.tld}`;
        });
        this.loading = false;
        if (this.apiService.translatingVar === 'en') {
          this.location.replaceState(`${this.apiService.currentTranslation.data.extension_url}?search=${this.keyword}`);
        } else {
          this.location.replaceState(`${this.apiService.translatingVar}/${this.apiService.currentTranslation.data.extension_url}?search=${this.keyword}`);
        }
      });
    } else {
      this.domainData = [];
      this.loading = false;
      if (this.apiService.translatingVar === 'en') {
        this.location.replaceState(`${this.apiService.currentTranslation.data.extension_url}`);
      } else {
        this.location.replaceState(`${this.apiService.translatingVar}/${this.apiService.currentTranslation.data.extension_url}`);
      }
    }
  }

  clearKeyword() {
    this.jqueryBinded = false;
    this.keyword = '';
    this.apiService.keyword = this.keyword;
    if (this.apiService.translatingVar === 'en') {
      this.location.replaceState(`${this.apiService.currentTranslation.data.extension_url}`);
    } else {
      this.location.replaceState(`${this.apiService.translatingVar}/${this.apiService.currentTranslation.data.extension_url}`);
    }
  }

  toggleFavMenu() {
    this.showFavMenu = !this.showFavMenu;
  }

  isAvail(tld: string): boolean {
    let currentDomain: Domain;
    if (this.domainData && this.domainData.length) {
      currentDomain = (this.domainData && this.domainData.length > 0) ?
        this.domainData.find(domain => domain.tld.toLowerCase() === tld.toLowerCase()) :
        null;
    }
    return currentDomain ? !currentDomain.avialability : !false;
  }
  addDomToFav(tld: string) {
    if (this.domainData && this.domainData.length) {
      const currentDomain: Domain = this.domainData.find(domain => domain.tld.toLowerCase() === tld.toLowerCase());
      if (this.favDomains.findIndex(dom => dom.keyword.toLowerCase() === (currentDomain.keyword + currentDomain.tld).toLowerCase()) < 0) {
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
    this.favDomains.push({
      keyword,
      link
    });
    window.localStorage.clear();
    window.localStorage.setItem('favDom', JSON.stringify(this.favDomains));
  }
  addSaleToFav(keyword: string, link: string) {
    this.favDomains.push({
      keyword,
      link
    });
    window.localStorage.clear();
    window.localStorage.setItem('favDom', JSON.stringify(this.favDomains));
  }
  removeFromFav(keyword: string) {
    this.favDomains = this.favDomains.filter(dom => !(dom.keyword === keyword));
    window.localStorage.clear();
    window.localStorage.setItem('favDom', JSON.stringify(this.favDomains));
  }
  isFavrouite(keyword: string) {
    return this.favDomains.findIndex(dom => dom.keyword.toLowerCase() === keyword.toLowerCase()) > -1;
  }

  filterTldList(cat: string) {
    return this.apiService.allTldList.filter(tld => tld.category.toLowerCase() === cat.toLowerCase());
  }

  getLinkForDomain(tld: string): string {
    if (this.domainData && this.domainData.length) {
      if (this.domainData.findIndex(domain => domain.tld.toLowerCase() === tld.toLowerCase()) > -1) {
        return this.domainData.find(domain => domain.tld.toLowerCase() === tld.toLowerCase()).link;
      }
      return '';
    }
    return '';
  }
}
