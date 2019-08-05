import { ApiService } from './api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'instant-domains';
  keyword = '';
  constructor(public apiService: ApiService) {
    this.apiService.getTldList(true).subscribe(res => {
      this.apiService.tldList = res;
    });
    this.apiService.getTldList(false).subscribe(res => {
      this.apiService.allTldList = res;
      this.apiService.getTldCats().subscribe(resp => {
        this.apiService.tldCats = resp;
      });
    });
    this.apiService.getIndustries().subscribe(res => {
      this.apiService.industries = res;
    });
  }
}
