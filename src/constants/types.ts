
export interface ProductsType{
    id?:number;
    name?: string;
    imageUrl: string;
    price: number;
    isDiscounted?: boolean;
    discountedPercentage?: number;
    stars?: number;
}

