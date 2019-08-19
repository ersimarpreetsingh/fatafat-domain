import { Location } from '@angular/common';
import { ApiService } from './api.service';
import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'instant-domains';
  keyword = '';
  

  constructor(public apiService: ApiService, public activatedRoute: ActivatedRoute, private router: Router) {
    // this.apiService.getTranslations().subscribe(res => {
    //   this.apiService.translations = res;
    //   console.log(this.apiService.translations);
    // });
    const stripTrailingSlash = (Location as any).stripTrailingSlash;
    (Location as any).stripTrailingSlash = function _stripTrailingSlash(url: string): string {
      const queryString$ = url.match(/([^?]*)?(.*)/);
      if (queryString$[2].length > 0) {
        return /[^\/]\/$/.test(queryString$[1]) ? queryString$[1] + '.' + queryString$[2] : stripTrailingSlash(url);
      }
      return /[^\/]\/$/.test(url) ? url + '.' : stripTrailingSlash(url);
    };
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
  });
    this.apiService.getTldList(true).subscribe(res => {
      this.apiService.tldList = res;
    });
    this.apiService.getIndustries().subscribe(res => {
      this.apiService.industries = res;
    });
    this.apiService.getSaleCategories().subscribe(res => {
      this.apiService.saleCategories = res;
    });
    // this.apiService.getCountrycode().subscribe(res => {
    //   this.apiService.Countrycode = res;
    // });
  }

  ngOnInit() {
    $(document).ready(() => {
      $('.language-dropdown #drop_btn').click((event) => {
        if ($('.language-dropdown .dropdown').hasClass('show')) {
          $('.language-dropdown .dropdown').removeClass('show');
        } else {
          $('.extension_drop.cstm_drop').removeClass('show');
          $('.character_drop.cstm_drop').removeClass('show');
          $('.industry_drop.cstm_drop').removeClass('show');
          $('#favMenu').removeClass('show');
          $('#domainMenu').removeClass('show');
          $('.language-dropdown .dropdown').addClass('show');
        }
        event.stopPropagation();
      });
      $('body').click(() => {
        $('#favMenu').removeClass('show');
        $('.language-dropdown #drop_btn').removeClass('open');
        $('.language-dropdown .dropdown').removeClass('show');
        $('#domainMenu').removeClass('show');
      });
    });
  }
  updateTranslations(code: string) {
    this.apiService.translatingVar = code;
    window.sessionStorage.removeItem('transCode');
    window.sessionStorage.setItem('transCode', code);
  }

  getActiveLanguage() {
    if (this.apiService.translations && this.apiService.translations.length > 0) {
      return this.apiService.translations.find(trans => trans.code === this.apiService.translatingVar).data.native_name;
    }
    return '';
  }
}
