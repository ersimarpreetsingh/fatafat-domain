import { GeneratorComponent } from './generator/generator.component';
import { ExtensionsComponent } from './extensions/extensions.component';
import { IndexComponent } from './index/index.component';
import { SaleComponent } from './sale/sale.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SitemapComponent } from './sitemap/sitemap.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'ar', component: IndexComponent },
  { path: 'bn', component: IndexComponent },
  { path: 'hr', component: IndexComponent },
  { path: 'cs', component: IndexComponent },
  { path: 'nl', component: IndexComponent },
  { path: 'fi', component: IndexComponent },
  { path: 'fr', component: IndexComponent },
  { path: 'de', component: IndexComponent },
  { path: 'el', component: IndexComponent },
  { path: 'hi', component: IndexComponent },
  { path: 'hu', component: IndexComponent },
  { path: 'id', component: IndexComponent },
  { path: 'it', component: IndexComponent },
  { path: 'ja', component: IndexComponent },
  { path: 'ko', component: IndexComponent },
  { path: 'zh', component: IndexComponent },
  { path: 'mr', component: IndexComponent },
  { path: 'no', component: IndexComponent },
  { path: 'pl', component: IndexComponent },
  { path: 'pt', component: IndexComponent },
  { path: 'pa', component: IndexComponent },
  { path: 'ro', component: IndexComponent },
  { path: 'ru', component: IndexComponent },
  { path: 'sk', component: IndexComponent },
  { path: 'es', component: IndexComponent },
  { path: 'sv', component: IndexComponent },
  { path: 'ta', component: IndexComponent },
  { path: 'te', component: IndexComponent },
  { path: 'th', component: IndexComponent },
  { path: 'tr', component: IndexComponent },
  { path: 'ur', component: IndexComponent },
  { path: 'vi', component: IndexComponent },
  { path: 'sitemap', component: SitemapComponent },
  { path: 'extensions', component: ExtensionsComponent },
  { path: 'ar/extensions', component: ExtensionsComponent },
  { path: 'bn/extensions', component: ExtensionsComponent },
  { path: 'hr/prosirenja', component: ExtensionsComponent },
  {
    path: 'hr/extensions',
    redirectTo: 'hr/prosirenja',
    pathMatch: 'full'
  },
  { path: 'cs/pripony', component: ExtensionsComponent },
  {
    path: 'cs/extensions',
    redirectTo: 'cs/pripony',
    pathMatch: 'full'
  },
  { path: 'nl/uitbreidingen', component: ExtensionsComponent },
  {
    path: 'nl/extensions',
    redirectTo: 'nl/uitbreidingen',
    pathMatch: 'full'
  },
  { path: 'fi/ylatason-verkkotunnukset', component: ExtensionsComponent },
  {
    path: 'fi/extensions',
    redirectTo: 'fi/ylatason-verkkotunnukset',
    pathMatch: 'full'
  },
  { path: 'fr/extensions', component: ExtensionsComponent },
  { path: 'de/endungen', component: ExtensionsComponent },
  {
    path: 'de/extensions',
    redirectTo: 'de/endungen',
    pathMatch: 'full'
  },
  { path: 'el/extensions', component: ExtensionsComponent },
  { path: 'hi/extensions', component: ExtensionsComponent },
  { path: 'hu/kiterjesztesek', component: ExtensionsComponent },
  {
    path: 'hu/extensions',
    redirectTo: 'hu/kiterjesztesek',
    pathMatch: 'full'
  },
  { path: 'id/ekstensi', component: ExtensionsComponent },
  {
    path: 'id/extensions',
    redirectTo: 'id/ekstensi',
    pathMatch: 'full'
  },
  { path: 'it/estensioni', component: ExtensionsComponent },
  {
    path: 'it/extensions',
    redirectTo: 'it/estensioni',
    pathMatch: 'full'
  },
  { path: 'ja/extensions', component: ExtensionsComponent },
  { path: 'ko/extensions', component: ExtensionsComponent },
  { path: 'zh/extensions', component: ExtensionsComponent },
  { path: 'mr/extensions', component: ExtensionsComponent },
  { path: 'no/forlengelse', component: ExtensionsComponent },
  {
    path: 'no/extensions',
    redirectTo: 'no/forlengelse',
    pathMatch: 'full'
  },
  { path: 'pl/rozszerzenia', component: ExtensionsComponent },
  {
    path: 'pl/extensions',
    redirectTo: 'pl/rozszerzenia',
    pathMatch: 'full'
  },
  { path: 'pt/extensoes', component: ExtensionsComponent },
  {
    path: 'pt/extensions',
    redirectTo: 'pt/extensoes',
    pathMatch: 'full'
  },
  { path: 'pa/extensions', component: ExtensionsComponent },
  { path: 'ro/extensie', component: ExtensionsComponent },
  {
    path: 'ro/extensions',
    redirectTo: 'pa/extensions',
    pathMatch: 'full'
  },
  { path: 'ru/extensions', component: ExtensionsComponent },
  { path: 'sk/pripony', component: ExtensionsComponent },
  {
    path: 'sk/extensions',
    redirectTo: 'sk/pripony',
    pathMatch: 'full'
  },
  { path: 'es/extensiones', component: ExtensionsComponent },
  {
    path: 'es/extensions',
    redirectTo: 'es/extensiones',
    pathMatch: 'full'
  },
  { path: 'sv/forlangning', component: ExtensionsComponent },
  {
    path: 'sv/extensions',
    redirectTo: 'sv/forlangning',
    pathMatch: 'full'
  },
  { path: 'ta/extensions', component: ExtensionsComponent },
  { path: 'te/extensions', component: ExtensionsComponent },
  { path: 'th/extensions', component: ExtensionsComponent },
  { path: 'tr/uzantilar', component: ExtensionsComponent },
  {
    path: 'tr/extensions',
    redirectTo: 'tr/uzantilar',
    pathMatch: 'full'
  },
  { path: 'ur/extensions', component: ExtensionsComponent },
  { path: 'vi/phan-mo-rong', component: ExtensionsComponent },
  {
    path: 'vi/extensions',
    redirectTo: 'vi/phan-mo-rong',
    pathMatch: 'full'
  },
  { path: 'generator', component: GeneratorComponent },
  { path: 'ar/generator', component: GeneratorComponent },
  { path: 'bn/generator', component: GeneratorComponent },
  { path: 'hr/generator', component: GeneratorComponent },
  { path: 'cs/generator', component: GeneratorComponent },
  { path: 'nl/generator', component: GeneratorComponent },
  { path: 'fi/generointi', component: GeneratorComponent },
  {
    path: 'fi/generator',
    redirectTo: 'fi/generointi',
    pathMatch: 'full'
  },
  { path: 'fr/generateur', component: GeneratorComponent },
  {
    path: 'fr/generator',
    redirectTo: 'fr/generateur',
    pathMatch: 'full'
  },
  { path: 'de/generator', component: GeneratorComponent },
  { path: 'el/generator', component: GeneratorComponent },
  { path: 'hi/generator', component: GeneratorComponent },
  { path: 'hu/generator', component: GeneratorComponent },
  { path: 'id/generator', component: GeneratorComponent },
  { path: 'it/generatore', component: GeneratorComponent },
  {
    path: 'it/generator',
    redirectTo: 'it/generatore',
    pathMatch: 'full'
  },
  { path: 'ja/generator', component: GeneratorComponent },
  { path: 'ko/generator', component: GeneratorComponent },
  { path: 'zh/generator', component: GeneratorComponent },
  { path: 'mr/generator', component: GeneratorComponent },
  { path: 'no/generator', component: GeneratorComponent },
  { path: 'pl/wygeneruj', component: GeneratorComponent },
  {
    path: 'pl/generator',
    redirectTo: 'pl/wygeneruj',
    pathMatch: 'full'
  },
  { path: 'pt/gerador', component: GeneratorComponent },
  {
    path: 'pt/generator',
    redirectTo: 'pt/gerador',
    pathMatch: 'full'
  },
  { path: 'pa/generator', component: GeneratorComponent },
  { path: 'ro/generator', component: GeneratorComponent },
  { path: 'ru/generator', component: GeneratorComponent },
  { path: 'sk/generator', component: GeneratorComponent },
  { path: 'es/generador', component: GeneratorComponent },
  {
    path: 'es/generator',
    redirectTo: 'es/generador',
    pathMatch: 'full'
  },
  { path: 'sv/generator', component: GeneratorComponent },
  { path: 'ta/generator', component: GeneratorComponent },
  { path: 'te/generator', component: GeneratorComponent },
  { path: 'th/generator', component: GeneratorComponent },
  { path: 'tr/uretec', component: GeneratorComponent },
  {
    path: 'tr/generator',
    redirectTo: 'tr/uretec',
    pathMatch: 'full'
  },
  { path: 'ur/generator', component: GeneratorComponent },
  { path: 'vi/cong-cu-san-zuat-ten-mien', component: GeneratorComponent },
  {
    path: 'vi/generator',
    redirectTo: 'vi/cong-cu-san-zuat-ten-mien',
    pathMatch: 'full'
  },
  { path: 'sale', component: SaleComponent },
  { path: 'ar/sale', component: SaleComponent },
  { path: 'bn/sale', component: SaleComponent },
  { path: 'hr/na-prodaju', component: SaleComponent },
  {
    path: 'hr/sale',
    redirectTo: 'hr/na-prodaju',
    pathMatch: 'full'
  },
  { path: 'cs/na-prodej', component: SaleComponent },
  {
    path: 'cs/sale',
    redirectTo: 'cs/na-prodej',
    pathMatch: 'full'
  },
  { path: 'nl/te-koop', component: SaleComponent },
  {
    path: 'nl/sale',
    redirectTo: 'nl/te-koop',
    pathMatch: 'full'
  },
  { path: 'fi/myynnissa', component: SaleComponent },
  {
    path: 'fi/sale',
    redirectTo: 'fi/myynnissa',
    pathMatch: 'full'
  },
  { path: 'fr/en-vente', component: SaleComponent },
  {
    path: 'fr/sale',
    redirectTo: 'fr/en-vente',
    pathMatch: 'full'
  },
  { path: 'de/zun-verkauf', component: SaleComponent },
  {
    path: 'de/sale',
    redirectTo: 'de/zun-verkauf',
    pathMatch: 'full'
  },
  { path: 'el/sale', component: SaleComponent },
  { path: 'hi/sale', component: SaleComponent },
  { path: 'hu/elado', component: SaleComponent },
  {
    path: 'hu/sale',
    redirectTo: 'hu/elado',
    pathMatch: 'full'
  },
  { path: 'id/dijual', component: SaleComponent },
  {
    path: 'id/sale',
    redirectTo: 'id/dijual',
    pathMatch: 'full'
  },
  { path: 'it/in-vendita', component: SaleComponent },
  {
    path: 'it/sale',
    redirectTo: 'it/in-vendita',
    pathMatch: 'full'
  },
  { path: 'ja/sale', component: SaleComponent },
  { path: 'ko/sale', component: SaleComponent },
  { path: 'zh/sale', component: SaleComponent },
  { path: 'mr/sale', component: SaleComponent },
  { path: 'no/salgs', component: SaleComponent },
  {
    path: 'no/sale',
    redirectTo: 'no/salgs',
    pathMatch: 'full'
  },
  { path: 'pl/na-sprzedaz', component: SaleComponent },
  {
    path: 'pl/sale',
    redirectTo: 'pl/na-sprzedaz',
    pathMatch: 'full'
  },
  { path: 'pt/disponivel', component: SaleComponent },
  {
    path: 'pt/sale',
    redirectTo: 'pt/disponivel',
    pathMatch: 'full'
  },
  { path: 'pa/sale', component: SaleComponent },
  { path: 'ro/de-vanzare', component: SaleComponent },
  {
    path: 'ro/sale',
    redirectTo: 'ro/de-vanzare',
    pathMatch: 'full'
  },
  { path: 'ru/sale', component: SaleComponent },
  { path: 'sk/na-predaj', component: SaleComponent },
  {
    path: 'sk/sale',
    redirectTo: 'sk/na-predaj',
    pathMatch: 'full'
  },
  { path: 'es/a-la-venta', component: SaleComponent },
  {
    path: 'es/sale',
    redirectTo: 'es/a-la-venta',
    pathMatch: 'full'
  },
  { path: 'sv/till-forsaljning', component: SaleComponent },
  {
    path: 'sv/sale',
    redirectTo: 'sv/till-forsaljning',
    pathMatch: 'full'
  },
  { path: 'ta/sale', component: SaleComponent },
  { path: 'te/sale', component: SaleComponent },
  { path: 'th/sale', component: SaleComponent },
  { path: 'tr/satilik', component: SaleComponent },
  {
    path: 'tr/sale',
    redirectTo: 'tr/satilik',
    pathMatch: 'full'
  },
  { path: 'ur/sale', component: SaleComponent },
  { path: 'vi/mua-ten-mien-co-san', component: SaleComponent },
  {
    path: 'vi/sale',
    redirectTo: 'vi/mua-ten-mien-co-san',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
