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

export interface FavDomain {
    keyword: string;
    link: string;
}

export interface Industry {
    id: number;
    industry: string;
    checked?: boolean;
}
export interface SelectableItem<T> {
    item: T;
    checked: boolean;
}
