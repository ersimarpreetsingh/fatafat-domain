import { Domain, TldInfo, GeneratedDomain, SaleDomain, Industry, SaleDomainResult, SaleCategory } from './modals/api-types';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  truelink = 'http://www.anrdoezrs.net/links/9133603/type/dlg/' +
              'https://godaddy.com/whois/results.aspx?isc=cjc99com&checkAvail=1&tmskey=&domain=';
  falselink = 'http://www.anrdoezrs.net/links/9133603/type/dlg' +
              '/https://godaddy.com/domainsearch/find?isc=cjc99com&checkAvail=1&tmskey=&domainToCheck=';
  tldList: TldInfo[] = [];
  allTldList: TldInfo[] = [];
  tldCats: string[] = [];
  industries: Industry[] = [];
  saleCategories: SaleCategory[] = [];
  keyword = '';

  constructor(public http: HttpClient) { }
  getTldList(limited: boolean): Observable<TldInfo[]> {
    if (limited) {
      return this.http.post<TldInfo[]>('https://instantdomains.com/api/v1/tld', {limit: 34});
    }
    return this.http.post<TldInfo[]>('https://instantdomains.com/api/v1/tld', {});
  }

  getDomains(keyword: string, limited?: boolean): Observable<Domain[]> {
    if (limited) {
      return this.http.post<Domain[]>('https://instantdomains.com/api/v1/domains', {keyword: keyword, limit: 34});
    }
    return this.http.post<Domain[]>('https://instantdomains.com/api/v1/domains', {keyword: keyword });
  }

  getGenerator(keyword: string, limited?: boolean): Observable<GeneratedDomain[]> {
    if (limited) {
      return this.http.post<GeneratedDomain[]>('https://instantdomains.com/api/v1/genrate', {keyword: keyword, limit: 34});
    }
    return this.http.post<GeneratedDomain[]>('https://instantdomains.com/api/v1/genrate', {keyword: keyword, limit : 102});
  }

  getForSale(keyword: string, limited?: boolean): Observable<SaleDomainResult> {
    if (limited) {
      return this.http.post<SaleDomainResult>('https://instantdomains.com/api/v1/sale', {keyword: keyword, limit: 34});
    }
    return this.http.post<SaleDomainResult>('https://instantdomains.com/api/v1/sale', {keyword: keyword, limit: 15});
  }

  getForSaleInit(limitSearch: number): Observable<SaleDomainResult> {
    return this.http.post<SaleDomainResult>('https://instantdomains.com/api/v1/sale', {limit: limitSearch});
  }

  getComInfo(keywordSearch: string): Observable<Domain> {
    return this.http.post<Domain>('https://instantdomains.com/api/v1/com', {keyword: keywordSearch});
  }

  getTldCats(): Observable<string[]> {
    return this.http.get<string[]>('https://instantdomains.com/api/v1/categories');
  }

  getIndustries(): Observable<Industry[]> {
    return this.http.get<Industry[]>('https://instantdomains.com/api/v1/industries');
  }

  getFilteredGenerator(keyword: string, industryIds?: number[], tld?: string, char?: number ): Observable<GeneratedDomain[]> {
    return this.http.post<GeneratedDomain[]>('https://instantdomains.com/api/v1/genrate', {keyword,
     char: char > 0 ? char : 20,
      tld: (tld && tld.length) > 0 ? tld : '.com',
      industry_ids: (industryIds && industryIds.length > 0) ? industryIds.toString() : '1'});
  }

  getFilterForSale(keyword: string, categories: string, min: number, max: number, lastId: number): Observable<SaleDomainResult> {
    return this.http.post<SaleDomainResult>('https://instantdomains.com/api/v1/sale', {
      keyword,
      limit: 15,
      categories,
      min,
      max,
      last_id: lastId
    });
  }

  getSaleCategories(): Observable<SaleCategory[]> {
    return this.http.get<SaleCategory[]>('https://instantdomains.com/api/v1/salecategories');
  }
  getTldId(ex: string): number {
     return this.allTldList.find(tld => tld.tld === ex).id;
  }

}
