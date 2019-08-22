import { SelectableItem, TldInfo } from './../modals/api-types';
import { ApiService } from './../api.service';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Subscription } from 'rxjs';
import { SaleDomain, FavDomain, GeneratedDomain } from '../modals/api-types';
import { Location } from '@angular/common';
import { NouisliderModule } from 'ng2-nouislider';
import { ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit , AfterViewChecked {
  jqueryBinded = false;
  public keyword = '';
  showFavMenu = false;
  favDomains: FavDomain[] = [];
  generatedDomains: GeneratedDomain[] = [];
  initSaleDomains: SaleDomain[] = [];
  sliderValue = [2, 20];

  genDomainApiSubscription: Subscription;

  genLoading = false;

  industryFilterOpen = false;
  extensionFilterOpen = false;
  characterFilterOpen = false;

  industryFilter: number[] = [];
  tldFilter = '';
  charFilter: number;

  tldFilterOpts: SelectableItem<string>[];
  extarray = [
    '.com',
    '.net',
    '.org',
    '.co',
    '.app',
    '.info',
    '.biz',
    '.co.uk',
    '.com.au',
    '.nz',
    '.eu',
    '.ae',
    '.cz',
    '.nl',
    '.fi',
    '.fr',
    '.de',
    '.gr',
    '.in',
    '.hu',
    '.id',
    '.jp',
    '.it',
    '.kr',
    '.cn',
    '.no',
    '.pl',
    '.pt',
    '.ro',
    '.ru',
    '.es',
    '.se',
    '.th',
    '.tr',
    '.vn'];

  constructor(public apiService: ApiService, private location: Location, private activatedRoute: ActivatedRoute) {
    this.keyword = apiService.keyword;
    setTimeout(() => {
    this.tldFilterOpts = this.extarray.map(tld => {
        return {
          item: tld,
          checked: false
        };
      });
    }, 3000);
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
      $('.shotlist').click((event) => {
        if ($('#favMenu').hasClass('show')) {
          $('#favMenu').removeClass('show');
        } else {
          $('.extension_drop.cstm_drop').removeClass('show');
          $('.character_drop.cstm_drop').removeClass('show');
          $('.industry_drop.cstm_drop').removeClass('show');
          $('#domainMenu').removeClass('show');
          $('.language-dropdown .dropdown').removeClass('show');
          $('#favMenu').addClass('show');
        }
        event.stopPropagation();
      });
      $('#domainMenuBtn').click((event) => {
        if ($('#domainMenu').hasClass('show')) {
          $('#domainMenu').removeClass('show');
        } else {
          $('.extension_drop.cstm_drop').removeClass('show');
          $('.character_drop.cstm_drop').removeClass('show');
          $('.industry_drop.cstm_drop').removeClass('show');
          $('#favMenu').removeClass('show');
          $('.language-dropdown .dropdown').removeClass('show');
          $('#domainMenu').addClass('show');
        }
        event.stopPropagation();
      });
      $('.dropdown.industry_filter').click(event => {
        if ($('.industry_drop.cstm_drop').hasClass('show')) {
          $('.industry_drop.cstm_drop').removeClass('show');
        } else {
          $('.extension_drop.cstm_drop').removeClass('show');
          $('.character_drop.cstm_drop').removeClass('show');
          $('#favMenu').removeClass('show');
          $('#domainMenu').removeClass('show');
          $('.language-dropdown .dropdown').removeClass('show');
          $('.industry_drop.cstm_drop').addClass('show');
        }
        event.stopPropagation();
      });
      $('.dropdown.extension_filter').click(event => {
        if ($('.extension_drop.cstm_drop').hasClass('show')) {
          $('.extension_drop.cstm_drop').removeClass('show');
        } else {
          $('.character_drop.cstm_drop').removeClass('show');
          $('.industry_drop.cstm_drop').removeClass('show');
          $('#favMenu').removeClass('show');
          $('#domainMenu').removeClass('show');
          $('.language-dropdown .dropdown').removeClass('show');
          $('.extension_drop.cstm_drop').addClass('show');
        }
        event.stopPropagation();
      });
      $('.dropdown.character_filter').click(event => {
        if ($('.character_drop.cstm_drop').hasClass('show')) {
          $('.character_drop.cstm_drop').removeClass('show');
        } else {
          $('.extension_drop.cstm_drop').removeClass('show');
          $('.industry_drop.cstm_drop').removeClass('show');
          $('#favMenu').removeClass('show');
          $('#domainMenu').removeClass('show');
          $('.language-dropdown .dropdown').removeClass('show');
          $('.character_drop.cstm_drop').addClass('show');
        }
        event.stopPropagation();
      });
      $('body').click((event) => {
        if (!($('.industry_drop.cstm_drop').is(event.target)) && $('.industry_drop.cstm_drop').has(event.target).length === 0) {
          $('.industry_drop.cstm_drop').removeClass('show');
        }
        event.stopPropagation();
      });

      $('body').click((event) => {
        if (!($('.extension_drop.cstm_drop').is(event.target)) && $('.extension_drop.cstm_drop').has(event.target).length === 0) {
          $('.extension_drop.cstm_drop').removeClass('show');
        }
        event.stopPropagation();
      });

      $('body').click((event) => {
        if (!($('.character_drop.cstm_drop').is(event.target)) && $('.character_drop.cstm_drop').has(event.target).length === 0) {
          $('.character_drop.cstm_drop').removeClass('show');
        }
        event.stopPropagation();
      });
      $('.noUi-origin').first().attr('disabled', 'true');
    }
  }

  getDomainData() {
    this.genLoading = true;
    this.apiService.keyword = this.keyword;
    if (this.genDomainApiSubscription) {
      this.genDomainApiSubscription.unsubscribe();
      this.generatedDomains = [];
    }
    if (this.keyword && this.keyword.length > 0) {
      this.genDomainApiSubscription = this.apiService.getGenerator(this.keyword, false).subscribe(res => {
        this.generatedDomains = res;
        this.generatedDomains.forEach(data => {
          data.link = data.avialability ?
            `${this.apiService.truelink}${data.keyword}${data.after}${data.tld}` :
            `${this.apiService.falselink}${data.keyword}${data.after}${data.tld}`;
        });
        this.genLoading = false;
        if (this.apiService.translatingVar === 'en') {
          this.location.replaceState(`${this.apiService.currentTranslation.data.generator_url}?search=${this.keyword}`);
        } else {
          this.location.replaceState(`${this.apiService.translatingVar}/${this.apiService.currentTranslation.data.generator_url}?search=${this.keyword}`);
        }
      });
    } else {
      this.genLoading = false;
      this.generatedDomains = [];
      if (this.apiService.translatingVar === 'en') {
        this.location.replaceState(`${this.apiService.currentTranslation.data.generator_url}`);
      } else {
        this.location.replaceState(`${this.apiService.translatingVar}/${this.apiService.currentTranslation.data.generator_url}`);
      }
    }
  }

  clearKeyword() {
    this.jqueryBinded = false;
    this.keyword = '';
    this.apiService.keyword = this.keyword;
    if (this.apiService.translatingVar === 'en') {
      this.location.replaceState(`${this.apiService.currentTranslation.data.generator_url}`);
    } else {
      this.location.replaceState(`${this.apiService.translatingVar}/${this.apiService.currentTranslation.data.generator_url}`);
    }
  }

  toggleFavMenu() {
    this.showFavMenu = !this.showFavMenu;
  }

  // addDomToFav(tld: string) {
  //   if (this.domainData && this.domainData.length) {
  //     const currentDomain: Domain = this.domainData.find(domain => domain.tld.toLowerCase() === tld.toLowerCase());
  //  if (this.favDomains.findIndex(dom => dom.keyword.toLowerCase() === (currentDomain.keyword + currentDomain.tld).toLowerCase()) < 0) {
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
    if (this.generatedDomains && this.generatedDomains.length ) {
      const currentDomain: GeneratedDomain = this.generatedDomains.find(
        domain => (domain.keyword + domain.after + domain.tld ).toLowerCase() === keyword.toLowerCase()
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
  // addGenToFav(keyword: string, link: string) {
  //   this.favDomains.push({
  //     keyword,
  //     link
  //   });
  //   window.localStorage.clear();
  //   window.localStorage.setItem('favDom', JSON.stringify(this.favDomains));
  // }

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

  toggleFilter(filterType: string) {
    switch (filterType) {
      case 'industry': {
        this.industryFilterOpen = !this.industryFilterOpen;
        if (this.industryFilterOpen) {
          this.extensionFilterOpen = false;
          this.characterFilterOpen = false;
        }
        break;
      }
      case 'extension': {
        this.extensionFilterOpen = !this.extensionFilterOpen;
        if (this.extensionFilterOpen) {
          this.industryFilterOpen = false;
          this.characterFilterOpen = false;
        }
        break;
      }
      case 'character': {
        this.characterFilterOpen = !this.characterFilterOpen;
        if (this.characterFilterOpen) {
          this.extensionFilterOpen = false;
          this.industryFilterOpen = false;
        }
        if (!this.characterFilterOpen) {
          this.apiService.getFilteredGenerator(this.keyword, this.industryFilter, this.tldFilter, this.sliderValue[1]).subscribe(res => {
            this.generatedDomains = res;
            this.generatedDomains.forEach(data => {
              data.link = data.avialability ?
                `${this.apiService.truelink}${data.keyword}${data.after}${data.tld}` :
                `${this.apiService.falselink}${data.keyword}${data.after}${data.tld}`;
            });
          });
        }
        break;
      }
    }
  }

  filterByIndustry() {
    $('.industry_drop.cstm_drop').removeClass('show');
    $('.character_drop.cstm_drop').removeClass('show');
    this.industryFilter = this.apiService.industries.filter(industry => industry.checked).map(ind => {
      return ind.id;
    });
    this.apiService.getFilteredGenerator(this.keyword, this.industryFilter, this.tldFilter, this.sliderValue[1]).subscribe(res => {
      this.generatedDomains = res;
      this.generatedDomains.forEach(data => {
        data.link = data.avialability ?
          `${this.apiService.truelink}${data.keyword}${data.after}${data.tld}` :
          `${this.apiService.falselink}${data.keyword}${data.after}${data.tld}`;
      });
    });
  }

  resetIndustryFilter() {
    this.apiService.industries.forEach(industry => {
      industry.checked = false;
    });
    this.industryFilter = this.apiService.industries.filter(industry => industry.checked).map(ind => {
      return ind.id;
    });
  }

  resetCharFilter() {
    this.sliderValue = [1, 20];
  }

  filterByTld(tldStr: string) {
    $('.extension_drop.cstm_drop').removeClass('show');
    this.tldFilterOpts.forEach(tld => {
      tld.checked = false;
    });
    this.tldFilterOpts.find(tld => tld.item === tldStr).checked = true;
    this.tldFilter = this.tldFilterOpts.find(tld => tld.checked).item;
    this.apiService.getFilteredGenerator(this.keyword, this.industryFilter, this.tldFilter, this.sliderValue[1]).subscribe(res => {
      this.generatedDomains = res;
      this.generatedDomains.forEach(data => {
        data.link = data.avialability ?
          `${this.apiService.truelink}${data.keyword}${data.after}${data.tld}` :
          `${this.apiService.falselink}${data.keyword}${data.after}${data.tld}`;
      });
    });
  }
}
