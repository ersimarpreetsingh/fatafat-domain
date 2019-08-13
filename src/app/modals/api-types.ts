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
as: string;
city: string;
country: string;
countryCode: string;
isp: string;
lat: string;
lon: string;
org: string;
query: string;
region: string;
regionName: string;
status: string;
timezone: string;
zip: string;
}
