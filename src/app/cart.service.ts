import { Injectable } from '@angular/core';
import { Product } from 'src/model/product';


@Injectable({
    providedIn: "root"
})

export class CartService {

    allCarts: { 'admin': Product[], 'user': Product[] } = { 'admin': [], 'user': [] }


    addProduct(product: Product, username: string): void {
        if (!this.doesExist(product, username)) {
            let newProduct: Product = {
                title: product.title,
                categoryId: product.categoryId,
                categoryName: product.categoryName,
                description: product.description,
                price: product.price,
                imgUrl: product.imgUrl,
                quantity: 1,
                totalPrice: product.price
            };
            this.allCarts[username].push(newProduct);
        }
    }

    removeProduct(product: Product, username: string): void {
        let index: number;
        for (let i = 0; i < this.allCarts[username].length; i++) {
            if (product.title === this.allCarts[username][i].title) {
                index = i;
            }
        }
        this.allCarts[username].splice(index, 1);
    }

    getTotalPrice(username: string): number {
        let sum = 0;
        for (let i = 0; i < this.allCarts[username].length; i++) {
            sum += parseFloat(this.allCarts[username][i].price.substring(0, this.allCarts[username][i].price.length - 1)) * this.allCarts[username][i].quantity;
        }
        return sum;
    }

    getProducts(username: string): Product[] {
        return this.allCarts[username];
    }

    getProductsCount(username: string): number {
        return this.allCarts[username].length;
    }

    doesExist(product: Product, username: string): boolean {
        for (let i = 0; i < this.allCarts[username].length; i++) {
            if (this.allCarts[username][i].title === product.title) {
                return true;
            }
        }
        return false;
    }

}