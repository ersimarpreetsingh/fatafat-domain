import { ApiService } from './../api.service';
import { Component, OnInit, AfterViewChecked, ɵConsole } from '@angular/core';
import { FavDomain, Domain, SaleDomain } from '../modals/api-types';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

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
  initSaleDomains: SaleDomain[] = [];

  genDomainApiSubscription: Subscription;

  loading = false;

  constructor(public apiService: ApiService, private location: Location) {
    this.keyword = apiService.keyword;
  }

  ngOnInit() {
    $(document).ready(() => {
      $('.language-dropdown #drop_btn').unbind();
      $('.language-dropdown #drop_btn').click((event) => {
        if ($('.language-dropdown .dropdown').hasClass('show')) {
          $('.language-dropdown .dropdown').removeClass('show');
        } else {
          $('.language-dropdown .dropdown').addClass('show');
          $('#favMenu').removeClass('show');
        }
        event.stopPropagation();
      });
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
    this.apiService.getForSaleInit(10).subscribe(res => {
      this.initSaleDomains = res.data;
    });
  }

  ngAfterViewChecked() {
    if (!this.jqueryBinded && this.keyword.length > 0) {
      this.jqueryBinded = true;
      console.log('initialized');
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
        this.location.replaceState(`extensions?search=${this.keyword}`);
      });
    } else {
      this.domainData = [];
      this.loading = false;
      this.location.replaceState(`extensions`);
    }
  }

  clearKeyword() {
    this.jqueryBinded = false;
    this.keyword = '';
    this.apiService.keyword = this.keyword;
    this.location.replaceState('generator');
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
