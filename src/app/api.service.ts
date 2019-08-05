import { Domain, TldInfo, GeneratedDomain, SaleDomain, Industry } from './modals/api-types';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  tldList: TldInfo[] = [];
  allTldList: TldInfo[] = [];
  tldCats: string[] = [];
  industries: Industry[] = [];
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
    return this.http.post<GeneratedDomain[]>('https://instantdomains.com/api/v1/genrate', {keyword: keyword});
  }

  getForSale(keyword: string, limited?: boolean): Observable<SaleDomain[]> {
    if (limited) {
      return this.http.post<SaleDomain[]>('https://instantdomains.com/api/v1/sale', {keyword: keyword, limit: 34});
    }
    return this.http.post<SaleDomain[]>('https://instantdomains.com/api/v1/sale', {keyword: keyword});
  }

  getForSaleInit(limitSearch: number): Observable<SaleDomain[]> {
    return this.http.post<SaleDomain[]>('https://instantdomains.com/api/v1/sale', {limit: limitSearch});
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
    return this.http.post<GeneratedDomain[]>('https://instantdomains.com/api/v1/genrate', {keyword: keyword,
     char: char > 0 ? char : 20,
      tld: (tld && tld.length) > 0 ? tld : '.com',
      industry_ids: (industryIds && industryIds.length > 0) ? industryIds.toString() : '1'});
  }

}
