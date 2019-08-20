export interface Product {
    title: string;
    description: string;
    price: string;
    categoryId: string;
    categoryName: string;
    imgUrl: string;
    quantity?: number;
    totalPrice?: string;
}