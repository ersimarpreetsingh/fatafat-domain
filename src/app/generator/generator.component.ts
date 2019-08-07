import { SelectableItem, TldInfo } from './../modals/api-types';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SaleDomain, FavDomain, GeneratedDomain } from '../modals/api-types';
import { Location } from '@angular/common';
import { NouisliderModule } from 'ng2-nouislider';

declare var $: any;

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
  public keyword = '';
  showFavMenu = false;
  favDomains: FavDomain[] = [];
  generatedDomains: GeneratedDomain[] = [];
  initSaleDomains: SaleDomain[] = [];
  sliderValue = [1, 20];

  genDomainApiSubscription: Subscription;

  genLoading = false;

  industryFilterOpen = false;
  extensionFilterOpen = false;
  characterFilterOpen = false;

  industryFilter: number[] = [];
  tldFilter = '' ;
  charFilter: number;

  tldFilterOpts: SelectableItem<TldInfo>[];

  constructor(public apiService: ApiService, private location: Location) {
    this.keyword = apiService.keyword;
    setTimeout(() => {
      this.tldFilterOpts = this.apiService.tldList.map(tld => {
        return {
          item: tld,
          checked: false
        };
      });
    }, 2000);
  }

  ngOnInit() {
    $(document).ready(() => {
      //   $("#drop_btn").click(function () {
      //     $("#drop_btn").toggleClass('open');
      //   });
        $('.shotlist').click((event) => {
          if ($('#favMenu').hasClass('show')) {
            $('#favMenu').removeClass('show');
          } else {
            $('#favMenu').addClass('show');
          }
          event.stopPropagation();
        });
        $('.language-dropdown #drop_btn').click((event) => {
          if ($('.language-dropdown .dropdown').hasClass('show')) {
            $('.language-dropdown .dropdown').removeClass('show');
          } else {
            $('.language-dropdown .dropdown').addClass('show');
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
      this.initSaleDomains = res;
    });
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
          `${this.apiService.truelink}${data.keyword}${data.tld}` :
           `${this.apiService.falselink}${data.keyword}${data.tld}` ;
        });
        this.genLoading = false;
        this.location.replaceState(`generator?search=${this.keyword}`);
      });
    } else {
      this.genLoading = false;
      this.generatedDomains = [];
      this.location.replaceState('generator');
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
          });
        }
        break;
      }
    }
  }

  filterByIndustry() {
    this.industryFilterOpen = false;
    this.industryFilter = this.apiService.industries.filter(industry => industry.checked).map(ind => {
      return ind.id;
    });
    this.apiService.getFilteredGenerator(this.keyword, this.industryFilter, this.tldFilter, this.sliderValue[1]).subscribe(res => {
      this.generatedDomains = res;
    });
  }

  filterByTld(tldId: number) {
    this.extensionFilterOpen = false;
    this.tldFilterOpts.forEach(tld => {
      tld.checked = false;
    });
    this.tldFilterOpts.find(tld => tld.item.id === tldId).checked = true;
    this.tldFilter = this.tldFilterOpts.find(tld => tld.checked).item.tld;
    this.apiService.getFilteredGenerator(this.keyword, this.industryFilter, this.tldFilter, this.sliderValue[1]).subscribe(res => {
      this.generatedDomains = res;
    });
  }
}
