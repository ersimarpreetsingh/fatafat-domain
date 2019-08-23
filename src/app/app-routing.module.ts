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
  {
    path: 'public/ar',
    redirectTo: 'ar',
    pathMatch: 'full'
  },
  {
    path: 'public/bn',
    redirectTo: 'bn',
    pathMatch: 'full'
  },
  {
    path: 'public/hr',
    redirectTo: 'hr',
    pathMatch: 'full'
  },
  {
    path: 'public/cs',
    redirectTo: 'cs',
    pathMatch: 'full'
  },
  {
    path: 'public/nl',
    redirectTo: 'nl',
    pathMatch: 'full'
  },
  {
    path: 'public/fi',
    redirectTo: 'fi',
    pathMatch: 'full'
  },
  {
    path: 'public/fr',
    redirectTo: 'fr',
    pathMatch: 'full'
  },
  {
    path: 'public/de',
    redirectTo: 'de',
    pathMatch: 'full'
  },
  {
    path: 'public/el',
    redirectTo: 'el',
    pathMatch: 'full'
  },
  {
    path: 'public/hi',
    redirectTo: 'hi',
    pathMatch: 'full'
  },
  {
    path: 'public/hu',
    redirectTo: 'hu',
    pathMatch: 'full',
  },
  {
    path: 'public/id',
    redirectTo: 'id',
    pathMatch: 'full',
  },
  {
    path: 'public/it',
    redirectTo: 'it',
    pathMatch: 'full'
  },
  {
    path: 'public/ja',
    redirectTo: 'ja',
    pathMatch: 'full'
  },
  {
    path: 'public/ko',
    redirectTo: 'ko',
    pathMatch: 'full'
  },
  {
    path: 'public/zh',
    redirectTo: 'zh',
    pathMatch: 'full'
  },
  {
    path: 'public/mr',
    redirectTo: 'mr',
    pathMatch: 'full'
  },
  {
    path: 'public/no',
    redirectTo: 'no',
    pathMatch: 'full'
  },
  {
    path: 'public/pl',
    redirectTo: 'pl',
    pathMatch: 'full'
  },
  {
    path: 'public/pt',
    redirectTo: 'pt',
    pathMatch: 'full'
  },
  {
    path: 'public/pa',
    redirectTo: 'pa',
    pathMatch: 'full'
  },
  {
    path: 'public/ro',
    redirectTo: 'ro',
    pathMatch: 'full'
  },
  {
    path: 'public/ru',
    redirectTo: 'ru',
    pathMatch: 'full'
  },
  {
    path: 'public/sk',
    redirectTo: 'sk',
    pathMatch: 'full'
  },
  {
    path: 'public/es',
    redirectTo: 'es',
    pathMatch: 'full'
  },
  {
    path: 'public/sv',
    redirectTo: 'sv',
    pathMatch: 'full'
  },
  {
    path: 'public/ta',
    redirectTo: 'ta',
    pathMatch: 'full'
  },
  {
    path: 'public/te',
    redirectTo: 'te',
    pathMatch: 'full'
  },
  {
    path: 'public/th',
    redirectTo: 'th',
    pathMatch: 'full'
  },
  {
    path: 'public/tr',
    redirectTo: 'tr',
    pathMatch: 'full'
  },
  {
    path: 'public/ur',
    redirectTo: 'ur',
    pathMatch: 'full'
  },
  {
    path: 'public/vi',
    redirectTo: 'vi',
    pathMatch: 'full'
  },
  {
    path: 'public/sitemap',
    redirectTo: 'sitemap',
    pathMatch: 'full'
  },
  {
    path: 'public/extensions',
    redirectTo: 'extensions',
    pathMatch: 'full'
  },
  {
    path: 'public/ar/extensions',
    redirectTo: 'ar/extensions',
    pathMatch: 'full'
  },
  {
    path: 'public/bn/extensions',
    redirectTo: 'bn/extensions',
    pathMatch: 'full'
  },
  {
    path: 'public/hr/prosirenja',
    redirectTo: 'hr/prosirenja',
    pathMatch: 'full'
  },
  {
    path: 'public/hr/extensions',
    redirectTo: 'hr/prosirenja',
    pathMatch: 'full'
  },
  {
    path: 'public/cs/pripony',
    redirectTo: 'cs/pripony',
    pathMatch: 'full'
  },
  {
    path: 'public/cs/extensions',
    redirectTo: 'cs/pripony',
    pathMatch: 'full'
  },
  {
    path: 'public/nl/uitbreidingen',
    redirectTo: 'nl/uitbreidingen',
    pathMatch: 'full'
  },
  {
    path: 'public/nl/extensions',
    redirectTo: 'nl/uitbreidingen',
    pathMatch: 'full'
  },
  {
    path: 'public/fi/ylatason-verkkotunnukset',
    redirectTo: 'fi/ylatason-verkkotunnukset',
    pathMatch: 'full',
  },
  {
    path: 'public/fi/extensions',
    redirectTo: 'fi/ylatason-verkkotunnukset',
    pathMatch: 'full',
  },
  {
    path: 'public/fr/extensions',
    redirectTo: 'fr/extensions',
    pathMatch: 'full'
  },
  {
    path: 'public/de/endungen',
    redirectTo: 'de/endungen',
    pathMatch: 'full'
  },
  {
    path: 'public/de/extensions',
    redirectTo: 'de/endungen',
    pathMatch: 'full'
  },
  {
    path: 'public/el/extensions',
    redirectTo: 'el/extensions',
    pathMatch: 'full'
  },
  {
    path: 'public/hi/extensions',
    redirectTo: 'hi/extensions',
    pathMatch: 'full'
  },
  {
    path: 'public/hu/kiterjesztesek',
    redirectTo: 'hu/kiterjesztesek',
    pathMatch: 'full'
  },
  {
    path: 'public/hu/extensions',
    redirectTo: 'hu/kiterjesztesek',
    pathMatch: 'full'
  },
  {
    path: 'public/id/ekstensi',
    redirectTo: 'id/ekstensi',
    pathMatch: 'full'
  },
  {
    path: 'public/id/extensions',
    redirectTo: 'id/ekstensi',
    pathMatch: 'full',
  },
  {
    path: 'public/it/estensioni',
    redirectTo: 'it/estensioni',
    pathMatch: 'full'
  },
  {
    path: 'public/it/extensions',
    redirectTo: 'it/estensioni',
    pathMatch: 'full'
  },
  {
    path: 'public/ja/extensions',
    redirectTo: 'ja/extensions',
    pathMatch: 'full'
  },
  {
    path: 'public/ko/extensions',
    redirectTo: 'ko/extensions',
    pathMatch: 'full',
  },
  {
    path: 'public/zh/extensions',
    redirectTo: 'zh/extensions',
    pathMatch: 'full'
  },
  {
    path: 'public/mr/extensions',
    redirectTo: 'mr/extensions',
    pathMatch: 'full',
  },
  {
    path: 'public/no/forlengelse',
    redirectTo: 'no/forlengelse',
  },
  {
    path: 'public/no/extensions',
    redirectTo: 'no/forlengelse',
    pathMatch: 'full'
  },
  {
    path: 'public/pl/rozszerzenia',
    redirectTo: 'pl/rozszerzenia',
    pathMatch: 'full'
  },
  {
    path: 'public/pl/extensions',
    redirectTo: 'pl/rozszerzenia',
    pathMatch: 'full'
  },
  {
    path: 'public/pt/extensoes',
    redirectTo: 'pt/extensoes',
    pathMatch: 'full',
  },
  {
    path: 'public/pt/extensions',
    redirectTo: 'pt/extensoes',
    pathMatch: 'full',
  },
  {
    path: 'public/pa/extensions',
    redirectTo: 'pa/extensions',
    pathMatch: 'full'
  },
  {
    path: 'public/ro/extensie',
    redirectTo: 'ro/extensie',
    pathMatch: 'full',
  },
  {
    path: 'public/ro/extensions',
    redirectTo: 'ro/extensie',
    pathMatch: 'full',
  },
  {
    path: 'public/ru/extensions',
    redirectTo: 'ru/extensions',
    pathMatch: 'full'
  },
  {
    path: 'public/sk/pripony',
    redirectTo: 'sk/pripony',
    pathMatch: 'full'
  },
  {
    path: 'public/sk/extensions',
    redirectTo: 'sk/pripony',
    pathMatch: 'full'
  },
  {
    path: 'public/es/extensiones',
    redirectTo: 'es/extensiones',
    pathMatch: 'full'
  },
  {
    path: 'public/es/extensions',
    redirectTo: 'es/extensiones',
    pathMatch: 'full'
  },
  {
    path: 'public/sv/forlangning',
    redirectTo: 'sv/forlangning',
    pathMatch: 'full'
  },
  {
    path: 'public/sv/extensions',
    redirectTo: 'sv/forlangning',
    pathMatch: 'full',
  },
  {
    path: 'public/ta/extensions',
    redirectTo: 'ta/extensions',
    pathMatch: 'full'
  },
  {
    path: 'public/te/extensions',
    redirectTo: 'te/extensions',
    pathMatch: 'full'
  },
  {
    path: 'public/th/extensions',
    redirectTo: 'th/extensions',
    pathMatch: 'full'
  },
  {
    path: 'public/tr/uzantilar',
    redirectTo: 'tr/uzantilar',
    pathMatch: 'full'
  },
  {
    path: 'public/tr/extensions',
    redirectTo: 'tr/uzantilar',
    pathMatch: 'full'
  },
  {
    path: 'public/ur/extensions',
    redirectTo: 'ur/extensions',
    pathMatch: 'full'
  },
  {
    path: 'public/vi/phan-mo-rong',
    redirectTo: 'vi/phan-mo-rong',
    pathMatch: 'full'
  },
  {
    path: 'public/vi/extensions',
    redirectTo: 'vi/phan-mo-rong',
    pathMatch: 'full'
  },
  {
    path: 'public/generator',
    redirectTo: 'generator',
    pathMatch: 'full'
  },
  {
    path: 'public/ar/generator',
    redirectTo: 'ar/generator',
    pathMatch: 'full'
  },
  {
    path: 'public/bn/generator',
    redirectTo: 'bn/generator',
    pathMatch: 'full'
  },
  {
    path: 'public/hr/generator',
    redirectTo: 'hr/generator',
    pathMatch: 'full'
  },
  {
    path: 'public/cs/generator',
    redirectTo: 'cs/generator',
    pathMatch: 'full'
  },
  {
    path: 'public/nl/generator',
    redirectTo: 'nl/generator',
    pathMatch: 'full'
  },
  {
    path: 'public/fi/generointi',
    redirectTo: 'fi/generointi',
    pathMatch: 'full'
  },
  {
    path: 'public/fi/generator',
    redirectTo: 'fi/generointi',
    pathMatch: 'full'
  },
  {
    path: 'public/fr/generateur',
    redirectTo: 'fr/generateur',
    pathMatch: 'full'
  },
  {
    path: 'fr/generator',
    redirectTo: 'fr/generateur',
    pathMatch: 'full'
  },
  {
    path: 'public/de/generator',
    redirectTo: 'de/generator',
    pathMatch: 'full'
  },
  {
    path: 'public/el/generator',
    redirectTo: 'el/generator',
    pathMatch: 'full'
  },
  {
    path: 'public/hi/generator',
    redirectTo: 'hi/generator',
    pathMatch: 'full'
  },
  {
    path: 'public/hu/generator',
    redirectTo: 'hu/generator',
    pathMatch: 'full'
  },
  {
    path: 'public/id/generator',
    redirectTo: 'id/generator',
    pathMatch: 'full'
  },
  {
    path: 'public/it/generatore',
    redirectTo: 'it/generatore',
    pathMatch: 'full'
  },
  {
    path: 'it/generator',
    redirectTo: 'it/generatore',
    pathMatch: 'full'
  },
  {
    path: 'public/ja/generator',
    redirectTo: 'ja/generator',
    pathMatch: 'full'
  },
  {
    path: 'public/ko/generator',
    redirectTo: 'ko/generator',
    pathMatch: 'full'
  },
  {
    path: 'public/zh/generator',
    redirectTo: 'zh/generator',
    pathMatch: 'full'
  },
  {
    path: 'public/mr/generator',
    redirectTo: 'mr/generator',
    pathMatch: 'full'
  },
  {
    path: 'public/no/generator',
    redirectTo: 'no/generator',
    pathMatch: 'full',
  },
  {
    path: 'public/pl/wygeneruj',
    redirectTo: 'pl/wygeneruj',
    pathMatch: 'full'
  },
  {
    path: 'public/pl/generator',
    redirectTo: 'pl/wygeneruj',
    pathMatch: 'full'
  },
  {
    path: 'public/pt/gerador',
    redirectTo: 'pt/gerador',
    pathMatch: 'full',

  },
  {
    path: 'public/pt/generator',
    redirectTo: 'pt/gerador',
    pathMatch: 'full'
  },
  {
    path: 'public/pa/generator',
    redirectTo: 'pa/generator',
    pathMatch: 'full'
  },
  {
    path: 'public/ro/generator',
    redirectTo: 'ro/generator',
    pathMatch: 'full'
  },
  {
    path: 'public/ru/generator',
    redirectTo: 'ru/generator',
    pathMatch: 'full'
  },
  {
    path: 'public/sk/generator',
    redirectTo: 'sk/generator',
    pathMatch: 'full'
  },
  {
    path: 'public/es/generador',
    redirectTo: 'es/generador',
    pathMatch: 'full'
  },
  {
    path: 'public/es/generator',
    redirectTo: 'es/generador',
    pathMatch: 'full'
  },
  {
    path: 'public/sv/generator',
    redirectTo: 'sv/generator',
    pathMatch: 'full'
  },
  {
    path: 'public/ta/generator',
    redirectTo: 'ta/generator',
    pathMatch: 'full'
  },
  {
    path: 'public/te/generator',
    redirectTo: 'te/generator',
    pathMatch: 'full'
  },
  {
    path: 'public/th/generator',
    redirectTo: 'th/generator',
    pathMatch: 'full'
  },
  {
    path: 'public/tr/uretec',
    redirectTo: 'tr/uretec',
    pathMatch: 'full',
  },
  {
    path: 'public/tr/generator',
    redirectTo: 'tr/uretec',
    pathMatch: 'full'
  },
  {
    path: 'public/ur/generator',
    redirectTo: 'ur/generator',
    pathMatch: 'full'
  },
  {
    path: 'public/vi/cong-cu-san-zuat-ten-mien',
    redirectTo: 'vi/cong-cu-san-zuat-ten-mien',
    pathMatch: 'full'
  },
  {
    path: 'public/vi/generator',
    redirectTo: 'vi/cong-cu-san-zuat-ten-mien',
    pathMatch: 'full'
  },
  {
    path: 'public/sale',
    redirectTo: 'sale',
    pathMatch: 'full'
  },
  {
    path: 'public/ar/sale',
    redirectTo: 'ar/sale',
    pathMatch: 'full'
  },
  {
    path: 'public/bn/sale',
    redirectTo: 'bn/sale',
    pathMatch: 'full'
  },
  {
    path: 'public/hr/na-prodaju',
    redirectTo: 'hr/na-prodaju',
    pathMatch: 'full'
  },
  {
    path: 'public/hr/sale',
    redirectTo: 'hr/na-prodaju',
    pathMatch: 'full'
  },
  {
    path: 'public/cs/na-prodej',
    redirectTo: 'cs/na-prodej',
    pathMatch: 'full'
  },
  {
    path: 'public/cs/sale',
    redirectTo: 'cs/na-prodej',
    pathMatch: 'full'
  },

  {
    path: 'public/nl/te-koop',
    redirectTo: 'nl/te-koop',
    pathMatch: 'full',
  },

  {
    path: 'public/nl/sale',
    redirectTo: 'nl/te-koop',
    pathMatch: 'full',
  },

  {
    path: 'public/fi/myynnissa',
    redirectTo: 'fi/myynnissa',
    pathMatch: 'full'
  },
  {
    path: 'public/fi/sale',
    redirectTo: 'fi/myynnissa',
    pathMatch: 'full'
  },
  {
    path: 'public/fr/en-vente',
    redirectTo: 'fr/en-vente',
    pathMatch: 'full'
  },
  {
    path: 'public/fr/sale',
    redirectTo: 'fr/en-vente',
    pathMatch: 'full'
  },
  {
    path: 'public/de/zun-verkauf',
    redirectTo: 'de/zun-verkauf',
    pathMatch: 'full'
  },
  {
    path: 'public/de/sale',
    redirectTo: 'de/zun-verkauf',
    pathMatch: 'full'
  },
  {
    path: 'public/el/sale',
    redirectTo: 'el/sale',
    pathMatch: 'full'
  },
  {
    path: 'public/hi/sale',
    redirectTo: 'hi/sale',
    pathMatch: 'full'
  },
  {
    path: 'public/hu/elado',
    redirectTo: 'hu/elado',
    pathMatch: 'full'
  },
  {
    path: 'public/hu/sale',
    redirectTo: 'hu/elado',
    pathMatch: 'full',
  },
  {
    path: 'public/id/dijual',
    redirectTo: 'id/dijual',
    pathMatch: 'full'
  },
  {
    path: 'public/id/sale',
    redirectTo: 'id/dijual',
    pathMatch: 'full'
  },
  {
    path: 'public/it/in-vendita',
    redirectTo: 'it/in-vendita',
    pathMatch: 'full'
  },
  {
    path: 'public/it/sale',
    redirectTo: 'it/in-vendita',
    pathMatch: 'full'
  },
  {
    path: 'public/ja/sale',
    redirectTo: 'ja/sale',
    pathMatch: 'full'
  },
  {
    path: 'public/ko/sale',
    redirectTo: 'ko/sale',
    pathMatch: 'full'
  },
  {
    path: 'public/zh/sale',
    redirectTo: 'zh/sale',
    pathMatch: 'full'
  },
  {
    path: 'public/mr/sale',
    redirectTo: 'mr/sale',
    pathMatch: 'full'
  },
  {
    path: 'public/no/salgs',
    redirectTo: 'no/salgs',
    pathMatch: 'full'
  },
  {
    path: 'public/no/sale',
    redirectTo: 'no/salgs',
    pathMatch: 'full',
  },
  {
    path: 'public/pl/na-sprzedaz',
    redirectTo: 'pl/na-sprzedaz',
    pathMatch: 'full',
  },
  {
    path: 'public/pl/sale',
    redirectTo: 'pl/na-sprzedaz',
    pathMatch: 'full'
  },
  {
    path: 'public/pt/disponivel',
    redirectTo: 'pt/disponivel',
    pathMatch: 'full'
  },
  {
    path: 'public/pt/sale',
    redirectTo: 'pt/disponivel',
    pathMatch: 'full'
  },
  {
    path: 'public/pa/sale',
    redirectTo: 'pa/sale',
    pathMatch: 'full'
  },
  {
    path: 'public/ro/de-vanzare',
    redirectTo: 'ro/de-vanzare',
    pathMatch: 'full'
  },
  {
    path: 'public/ro/sale',
    redirectTo: 'ro/de-vanzare',
    pathMatch: 'full'
  },
  {
    path: 'public/ru/sale',
    redirectTo: 'ru/sale',
    pathMatch: 'full'
  },
  {
    path: 'public/sk/na-predaj',
    redirectTo: 'sk/na-preda',
    pathMatch: 'full'
  },
  {
    path: 'public/sk/sale',
    redirectTo: 'sk/na-predaj',
    pathMatch: 'full'
  },
  {
    path: 'public/es/a-la-venta',
    redirectTo: 'es/a-la-venta',
    pathMatch: 'full'
  },
  {
    path: 'public/es/sale',
    redirectTo: 'es/a-la-venta',
    pathMatch: 'full'
  },
  {
    path: 'public/sv/till-forsaljning',
    redirectTo: 'sv/till-forsaljning',
    pathMatch: 'full'
  },
  {
    path: 'public/sv/sale',
    redirectTo: 'sv/till-forsaljning',
    pathMatch: 'full'
  },
  {
    path: 'public/ta/sale',
    redirectTo: 'ta/sale',
    pathMatch: 'full'
  },
  {
    path: 'public/te/sale',
    redirectTo: 'te/sale',
    pathMatch: 'full'
  },

  {
    path: 'public/th/sale',
    redirectTo: 'th/sale',
    pathMatch: 'full'
  },
  {
    path: 'public/tr/satilik',
    redirectTo: 'tr/satilik',
    pathMatch: 'full'
  },
  {
    path: 'public/tr/sale',
    redirectTo: 'tr/satilik',
    pathMatch: 'full'
  },
  {
    path: 'public/ur/sale',
    redirectTo: 'ur/sale',
    pathMatch: 'full'
  },
  {
    path: 'public/vi/mua-ten-mien-co-san',
    redirectTo: 'vi/mua-ten-mien-co-san',
    pathMatch: 'full'
  },
  {
    path: 'public/vi/sale',
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
