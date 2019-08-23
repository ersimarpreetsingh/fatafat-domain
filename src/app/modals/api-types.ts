export interface Domain {
    keyword: string;
    tld: string;
    avialability: boolean;
    rank?: number;
    link: string;
}

export interface TldInfo {
    id: number;
    tld: string;
    rank: number;
    category: string;
}

export interface GeneratedDomain {
    keyword: string;
    after: string;
    tld: string;
    avialability: boolean;
    rank: number;
    link: string;
}

export interface SaleDomain {
    keyword: string;
    price: number;
    link: string;
    image: string;
}

export interface SaleDomainResult {
    last_id?: number;
    total_records?: number;
    data: SaleDomain[];
}

export interface FavDomain {
    keyword: string;
    link: string;
}

export interface Industry {
    id: number;
    industry: string;
    checked?: boolean;
}

export interface SaleCategory {
    id: number;
    tags: string;
}

export interface SelectableItem<T> {
    item: T;
    checked: boolean;
}
export interface CountryCode {
  country: string;
}

export interface TranslationData {
    url: string;
    just_start_typing: string;
    generator_url: string;
    extension_url: string;
    sale_url: string;
    native_name: string;
    h1: string;
    primium_h2: string;
    serious_about_h3: string;
    all: string;
    extension: string;
    generator: string;
    for_sale: string;
    view_more: string;
    see_all: string;
    buy: string;
    expired: string;
    visit_site: string;
    appraise: string;
    google_search: string;
    wayback_machine: string;
    choose_your_language: string;
    category: string;
    min: string;
    max: string;
    apply: string;
    select_filter: string;
    popular: string;
    featured: string;
    select_an_industry: string;
    industry_filter: string;
    character: string;
}

export interface Translation {
    lang: string;
    code: string;
    data: TranslationData;
}

export interface MetaData {
    url: string;
    nativeName: string;
    title: string;
    description: string;
    extensionsTitle: string;
    extensionsDescription: string;
    generatorTitle: string;
    generatorDescription: string;
    saleTitle: string;
    saleDescription: string;
}

export interface MetaServiceData {
    language: string;
    code: string;
    data: MetaData;
}
