import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NocharacterDirective } from './nocharacter.directive';
import { InputAutofocusDirective } from './input-autofocus.directive';
import { HttpClientModule } from '@angular/common/http';
import { ExtensionsComponent } from './extensions/extensions.component';
import { GeneratorComponent } from './generator/generator.component';
import { SaleComponent } from './sale/sale.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NocharacterDirective,
    InputAutofocusDirective,
    ExtensionsComponent,
    GeneratorComponent,
    SaleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NouisliderModule,
  ],
  providers: [Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
