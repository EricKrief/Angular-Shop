import { Product } from './product';

export interface Cart {
    username: string;
    products: Product[];
}