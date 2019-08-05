import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FavDomain, Domain, SaleDomain } from '../modals/api-types';
import { Subscription } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  public keyword = '';
  showFavMenu = false;
  favDomains: FavDomain[] = [];
  saleDomainApiSubscription: Subscription;
  initSaleDomains: SaleDomain[] = [];
  saleLoading = false;
  saleDomains: SaleDomain[] = [];



  constructor(private apiService: ApiService, private location: Location) {
    this.keyword = apiService.keyword;
  }

  ngOnInit() {
    this.favDomains = window.localStorage.getItem('favDom') ? JSON.parse(window.localStorage.getItem('favDom')) : [];
    if (window.location.href.split('=').length > 1) {
      this.keyword = window.location.href.split('=')[1];
      this.getDomainData();
    } else if (this.apiService.keyword && this.apiService.keyword.length > 0) {
      this.keyword = this.apiService.keyword;
      this.getDomainData();
    }
    this.apiService.getForSaleInit(10).subscribe(res => {
      this.initSaleDomains = res;
    });
  }

  getDomainData() {
    this.apiService.keyword = this.keyword;
    this.saleLoading = true;
    if (this.saleDomainApiSubscription) {
      this.saleDomainApiSubscription.unsubscribe();
    }
    if (this.keyword && this.keyword.length > 0) {
      this.saleDomainApiSubscription = this.apiService.getForSale(this.keyword, true).subscribe(res => {
        this.saleDomains = res;
        this.saleLoading = false;
        this.location.replaceState(`sale?search=${this.keyword}`);
      });
    } else {
      this.saleLoading = false;
      this.saleDomains = [];
      this.location.replaceState('sale');
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

  // addDomToFav(tld: string) {
  //   if (this.domainData && this.domainData.length) {
  //     const currentDomain: Domain = this.domainData.find(domain => domain.tld.toLowerCase() === tld.toLowerCase());
  //     if (this.favDomains.findIndex(dom => dom.keyword.toLowerCase() === (currentDomain.keyword + currentDomain.tld).toLowerCase()) < 0) {
  //       this.favDomains.push({
  //         keyword: `${currentDomain.keyword}${currentDomain.tld}`,
  //         link: currentDomain.link
  //       });
  //     }
  //     window.localStorage.clear();
  //     window.localStorage.setItem('favDom', JSON.stringify(this.favDomains));
  //   }
  // }
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

}
