import { SelectableItem, SaleCategory } from './../modals/api-types';
import { Location } from '@angular/common';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { FavDomain, Domain, SaleDomain } from '../modals/api-types';
import { Subscription } from 'rxjs';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

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


  constructor(public apiService: ApiService, private location: Location, private activatedRoute: ActivatedRoute) {
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
    console.log(this.activatedRoute.snapshot.url);
    console.log(this.activatedRoute.snapshot.url[0].path);
    this.activatedRoute.url.subscribe(url => {
      console.log(url);
      console.log(url[0].path);
    });
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
    $(document).ready(() => {
      $('header').removeClass('home');
      if (!($('app-root div').first().hasClass('results-page'))) {
        $('app-root div').first().addClass('results-page');
      }
      // $('.language-dropdown #drop_btn').click((event) => {
      //   if ($('.language-dropdown .dropdown').hasClass('show')) {
      //     $('.language-dropdown .dropdown').removeClass('show');
      //   } else {
      //     $('#favMenu').removeClass('show');
      //     $('.industry_drop.cstm_drop').removeClass('show');
      //     $('.language-dropdown .dropdown').addClass('show');
      //   }
      //   event.stopPropagation();
      // });
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
    this.apiService.getFilterForSale(this.keyword, '', this.min, this.max, this.lastId).subscribe(res => {
      this.saleDomains = res.data;
    });
  }

  ngAfterViewChecked() {
    if (!this.jqueryBinded) {
      this.jqueryBinded = true;
      console.log('initialized');
      setTimeout(() => {
        $('.shotlist').click((event) => {
          if ($('#favMenu').hasClass('show')) {
            $('#favMenu').removeClass('show');
          } else {
            $('.language-dropdown .dropdown').removeClass('show');
            $('.industry_drop.cstm_drop').removeClass('show');
            $('#favMenu').addClass('show');
          }
          event.stopPropagation();
        });
        $('.dropdown.industry_filter').click((event) => {
          if ($('.industry_drop.cstm_drop').hasClass('show')) {
            $('.industry_drop.cstm_drop').removeClass('show');
          } else {
            $('.language-dropdown .dropdown').removeClass('show');
            $('#favMenu').removeClass('show');
            $('.industry_drop.cstm_drop').addClass('show');
          }
          event.stopPropagation();
        });
        $('body').click((event) => {
          if (!($('.industry_drop.cstm_drop').is(event.target)) && $('.industry_drop.cstm_drop').has(event.target).length === 0) {
            $('.industry_drop.cstm_drop').removeClass('show');
          }
          event.stopPropagation();
        });
      }, 2000);

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
        this.saleLoading = false;
        if (this.apiService.translatingVar === 'en') {
          this.location.replaceState(`${this.apiService.currentTranslation.data.sale_url}?search=${this.keyword}`);
        } else {
          this.location.replaceState(`${this.apiService.translatingVar}/${this.apiService.currentTranslation.data.sale_url}?search=${this.keyword}`);
        }
      });
    } else {
      this.saleLoading = false;
      this.saleDomains = [];
      if (this.apiService.translatingVar === 'en') {
        this.location.replaceState(`${this.apiService.currentTranslation.data.sale_url}`);
      } else {
        this.location.replaceState(`${this.apiService.translatingVar}/${this.apiService.currentTranslation.data.sale_url}`);
      }
    }
  }

  clearKeyword() {
    this.jqueryBinded = false;
    this.keyword = '';
    this.apiService.keyword = this.keyword;
    this.lastId = 0;
    this.stopInfiniteScroll = false;
    if (this.apiService.translatingVar === 'en') {
      this.location.replaceState(`${this.apiService.currentTranslation.data.sale_url}`);
    } else {
      this.location.replaceState(`${this.apiService.translatingVar}/${this.apiService.currentTranslation.data.sale_url}`);
    }
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
    });
  }
  resetCategoryfilter() {
    $('.industry_drop.cstm_drop').removeClass('show');
    this.saleCategories.forEach(cat => cat.checked = false);
    const categoryFilter: number[] = this.saleCategories.filter(cat => cat.checked).map(cat => cat.item.id);
    this.apiService.getFilterForSale(this.keyword, categoryFilter.toString(), this.min, this.max, this.lastId).subscribe(res => {
      this.saleDomains = res.data;
    });
  }
  onScrollDown() {
    this.lastId++;
    if (!this.stopInfiniteScroll) {
      const categoryFilter: number[] = this.saleCategories.filter(cat => cat.checked).map(cat => cat.item.id);
      this.apiService.getFilterForSale(this.keyword, categoryFilter.toString(), this.min, this.max, this.lastId).subscribe(res => {
        this.saleDomains = [...this.saleDomains, ...res.data];
      });
    }
  }
}
