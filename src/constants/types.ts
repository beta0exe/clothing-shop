
export interface ProductsType{
    id?:number;
    name?: string;
    imageUrl: string;
    price: number;
    isDiscounted?: boolean;
    discountedPercentage?: number;
    stars?: number;
}

export interface Product {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    isDiscounted: boolean;
    discountedPercentage?: number;
    stars: number;
    color: string;
    category: string;
    sizes: string[];
    style: string[];
}