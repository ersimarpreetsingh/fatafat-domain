import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { FavDomain, Domain, SaleDomain } from '../modals/api-types';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-extensions',
  templateUrl: './extensions.component.html',
  styleUrls: ['./extensions.component.css']
})
export class ExtensionsComponent implements OnInit {
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
    this.favDomains = window.localStorage.getItem('favDom') ? JSON.parse(window.localStorage.getItem('favDom')) : [];
    if (window.location.href.split('=').length > 1) {
      this.keyword = window.location.href.split('=')[1];
      this.getDomainData();
    } else if (this.apiService.keyword && this.apiService.keyword.length > 1) {
      this.keyword = this.apiService.keyword;
      this.getDomainData();
    }
    this.apiService.getForSaleInit(10).subscribe(res => {
      this.initSaleDomains = res;
    });
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
}
