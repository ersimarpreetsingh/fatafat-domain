import { MetadataServiceService } from './metadata-service.service';
import { ApiService } from './api.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'instant-domains';
  keyword = '';
  constructor(public apiService: ApiService, public activatedRoute: ActivatedRoute, private router: Router,
              public metaService: MetadataServiceService) {
    this.apiService.countryCode.country = '';
    $('link[rel="canonical"]').attr('href', 'https://instantdomains.com' + window.location.pathname);
    setTimeout(() => {
      const jsonld = JSON.parse($('script[type="application/ld+json"]').html());
      if (this.apiService.translatingVar === 'en' || this.apiService.translatingVar === '') {
        jsonld.url = 'https://instantdomains.com/';
        jsonld.potentialAction.target = `https://instantdomains.com/?search={search_term_string}`;
        $('script[type="application/ld+json"]').html(JSON.stringify(jsonld));
      } else {
        jsonld.url = `https://instantdomains.com/${this.apiService.translatingVar}`;
        jsonld.potentialAction.target = `https://instantdomains.com/${this.apiService.translatingVar}?search={search_term_string}`;
        $('script[type="application/ld+json"]').html(JSON.stringify(jsonld));
      }
    }, 3000);
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
      $('link[rel="canonical"]').attr('href', 'https://instantdomains.com' + window.location.pathname);
      const jsonld = JSON.parse($('script[type="application/ld+json"]').html());
      if (this.apiService.translatingVar === 'en') {
        jsonld.url = 'https://instantdomains.com/';
        jsonld.potentialAction.target = `https://instantdomains.com/?search={search_term_string}`;
        $('script[type="application/ld+json"]').html(JSON.stringify(jsonld));
      } else {
        jsonld.url = `https://instantdomains.com/${this.apiService.translatingVar}`;
        jsonld.potentialAction.target = `https://instantdomains.com/${this.apiService.translatingVar}?search={search_term_string}`;
        $('script[type="application/ld+json"]').html(JSON.stringify(jsonld));
      }
    });
    this.apiService.getCountrycode().subscribe(res => {
      this.apiService.countryCode = res;
      this.apiService.getForSaleInit(10).subscribe(res0 => {
        this.apiService.initSaleDomains = res0.data;
      });
      this.apiService.getTldList(true).subscribe(res1 => {
        this.apiService.tldList = res1;
        this.apiService.tldList = this.apiService.tldList.sort((a, b) => {
          return a.rank < b.rank ? 1 : -1;
        });
      });
      this.apiService.getIndustries().subscribe(res2 => {
        this.apiService.industries = res2;
      });
      this.apiService.getSaleCategories().subscribe(res3 => {
        this.apiService.saleCategories = res3;
      });
    });
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
