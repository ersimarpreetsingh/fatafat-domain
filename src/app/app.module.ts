import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NocharacterDirective } from './nocharacter.directive';
import { InputAutofocusDirective } from './input-autofocus.directive';
import { HttpClientModule } from '@angular/common/http';
import { ExtensionsComponent } from './extensions/extensions.component';
import { GeneratorComponent } from './generator/generator.component';
import { SaleComponent } from './sale/sale.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NocharacterDirective,
    InputAutofocusDirective,
    ExtensionsComponent,
    GeneratorComponent,
    SaleComponent,
    SitemapComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NouisliderModule,
    InfiniteScrollModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
