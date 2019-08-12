import { SelectableItem, SaleCategory } from './../modals/api-types';
import { Location } from '@angular/common';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { FavDomain, Domain, SaleDomain } from '../modals/api-types';
import { Subscription } from 'rxjs';
import { ApiService } from '../api.service';

declare var $: any;
@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit, AfterViewChecked {
  lastId = 0;
  jqueryBinded = false;
  public keyword = '';
  showFavMenu = false;
  favDomains: FavDomain[] = [];
  saleDomainApiSubscription: Subscription;
  initSaleDomains: SaleDomain[] = [];
  saleLoading = false;
  saleDomains: SaleDomain[] = [];
  saleCategories: SelectableItem<SaleCategory>[] = [];
  min: number;
  max: number;
  stopInfiniteScroll = false;


  constructor(public apiService: ApiService, private location: Location) {
    this.keyword = apiService.keyword;
    setTimeout(() => {
      this.apiService.saleCategories.forEach(saleCat => {
        this.saleCategories.push({
          item: saleCat,
          checked: false
        });
      });
    }, 2000);
  }

  ngOnInit() {
    $(document).ready(() => {
      $('.language-dropdown #drop_btn').click((event) => {
        if ($('.language-dropdown .dropdown').hasClass('show')) {
          $('.language-dropdown .dropdown').removeClass('show');
        } else {
          $('.language-dropdown .dropdown').addClass('show');
        }
        event.stopPropagation();
      });
      $('body').click(() => {
        $('#favMenu').removeClass('show');
        $('.language-dropdown #drop_btn').removeClass('open');
        $('.language-dropdown .dropdown').removeClass('show');
        $('#domainMenu').removeClass('show');
        // $('.industry_drop.cstm_drop').removeClass('show');
      });
    });

    this.favDomains = window.localStorage.getItem('favDom') ? JSON.parse(window.localStorage.getItem('favDom')) : [];
    if (window.location.href.split('=').length > 1) {
      this.keyword = window.location.href.split('=')[1];
      this.getDomainData();
    } else if (this.apiService.keyword && this.apiService.keyword.length > 0) {
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
          $('#favMenu').addClass('show');
        }
        event.stopPropagation();
      });
      $('#domainMenuBtn').click((event) => {
        if ($('#domainMenu').hasClass('show')) {
          $('#domainMenu').removeClass('show');
        } else {
          $('#domainMenu').addClass('show');
        }
        event.stopPropagation();
      });
      $('.dropdown.industry_filter').click((event) => {
        if ($('.industry_drop.cstm_drop').hasClass('show')) {
          $('.industry_drop.cstm_drop').removeClass('show');
        } else {
          $('.industry_drop.cstm_drop').addClass('show');
        }
        event.stopPropagation();
      });
      $(document).mouseup((event) => {
        if (!($('.industry_drop.cstm_drop').is(event.target)) && $('.industry_drop.cstm_drop').has(event.target).length === 0) {
          $('.industry_drop.cstm_drop').removeClass('show');
        }
        event.stopPropagation();
      });
    }
  }

  getDomainData() {
    this.lastId = 0;
    this.stopInfiniteScroll = false;
    this.apiService.keyword = this.keyword;
    this.saleLoading = true;
    if (this.saleDomainApiSubscription) {
      this.saleDomainApiSubscription.unsubscribe();
    }
    if (this.keyword && this.keyword.length > 0) {
      this.saleDomainApiSubscription = this.apiService.getFilterForSale(this.keyword, null, null, null, this.lastId).subscribe(res => {
        this.saleDomains = res.data;
        this.lastId = res.last_id;
        this.saleLoading = false;
        this.stopInfiniteScroll = this.lastId === res.total_records;
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
    this.saleDomains = [];
    this.lastId = 0;
    this.stopInfiniteScroll = false;
    this.location.replaceState('generator');
  }

  toggleFavMenu() {
    this.showFavMenu = !this.showFavMenu;
  }

  // addDomToFav(tld: string) {
  //   if (this.domainData && this.domainData.length) {
  //     const currentDomain: Domain = this.domainData.find(domain => domain.tld.toLowerCase() === tld.toLowerCase());
  //   if (this.favDomains.findIndex(dom => dom.keyword.toLowerCase() === (currentDomain.keyword + currentDomain.tld).toLowerCase()) < 0) {
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

  applyCategoryFilter() {
    this.lastId = 0;
    this.stopInfiniteScroll = false;
    const categoryFilter: number[] = this.saleCategories.filter(cat => cat.checked).map(cat => cat.item.id);
    $('.industry_drop.cstm_drop').removeClass('show');
    this.apiService.getFilterForSale(this.keyword, categoryFilter.toString(), this.min, this.max, this.lastId).subscribe(res => {
      this.saleDomains = res.data;
      this.lastId = res.last_id;
      this.stopInfiniteScroll = this.lastId === res.total_records;
    });
  }
  resetCategoryfilter() {
    this.saleCategories.forEach(cat => cat.checked = false);
  }
  onScrollDown() {
    if (!this.stopInfiniteScroll) {
      const categoryFilter: number[] = this.saleCategories.filter(cat => cat.checked).map(cat => cat.item.id);
      this.apiService.getFilterForSale(this.keyword, categoryFilter.toString(), this.min, this.max, this.lastId).subscribe(res => {
        this.saleDomains = [...this.saleDomains, ...res.data];
        this.lastId = res.last_id;
        this.stopInfiniteScroll = this.lastId === res.total_records;
      });
    }
  }
}
