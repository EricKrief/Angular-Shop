import { Injectable } from '@angular/core';
import { Product } from 'src/model/product';


@Injectable({
    providedIn: "root"
})

export class CartService {
    products: Product[] = [];
    shouldAddProduct = true;

    addProduct(product: Product): void {
        if (!this.doesExist(product)) {
            product.quantity = 1;
            product.totalPrice = product.price;
            this.products.push(product);
        }
    }

    removeProduct(product: Product): void {
        let index: number;
        for (let i = 0; i < this.products.length; i++) {
            if (product.title === this.products[i].title) {
                index = i;
            }
        }

        this.products.splice(index, 1);
    }

    getTotalPrice(): number {
        let sum = 0;
        for (let i = 0; i < this.products.length; i++) {
            sum += parseFloat(this.products[i].price.substring(0, this.products[i].price.length - 1)) * this.products[i].quantity;
        }
        return sum;
    }

    getProducts(): Product[] {
        return this.products;
    }

    getProductsCount(): number {
        return this.products.length;
    }

    doesExist(product: Product): boolean {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].title === product.title) {
                return true;
            }
        }
        return false;
    }

}