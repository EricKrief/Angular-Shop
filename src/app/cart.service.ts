import { Injectable } from '@angular/core';
import { Product } from 'src/model/product';
import { Cart } from 'src/model/cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})

export class CartService {

    carts: Cart[] = [];
    private _numberOfItems = new BehaviorSubject<number>(0);
    public readonly numberOfItems: Observable<number> = this._numberOfItems.asObservable();
    private _productsInCart = new BehaviorSubject<Product[]>([]);
    public readonly productsInCart: Observable<Product[]> = this._productsInCart.asObservable();

    constructor(private http: HttpClient) {
        this.http.get('assets/users.json').toPromise().then((json: any) => {
            json.users.forEach(user => {
                this.carts.push({ username: user.username, products: [] })
            });
        })
    }

    updateNumberOfItems(username: string) {
        this._numberOfItems.next(this.getProductsCount(username));
    }


    addProduct(product: Product, username: string): void {
        if (!this.doesExist(product, username)) {
            let newProduct: Product = {
                ...product, totalPrice: product.price, quantity: 1
            };
            let currentCart = this.carts.find(c => c.username === username).products;
            currentCart.push(newProduct);
            this._productsInCart.next(currentCart);
            this.updateNumberOfItems(username);
        }
    }

    getProductsOnLogin(username: string) {
        this._productsInCart.next(this.carts.find(c => c.username === username).products);
    }

    removeProduct(product: Product, username: string): void {
        let cart = this.carts.find(c => c.username === username);
        for (let i = 0; i < cart.products.length; i++) {
            if (product.title === cart.products[i].title) {
                cart.products.splice(i, 1);
                break;
            }
        }
        this._productsInCart.next(cart.products);
    }

    getTotalPrice(username: string): number {
        let sum = 0;
        let cart = this.carts.find(c => c.username === username);
        for (let i = 0; i < cart.products.length; i++) {
            sum += parseFloat(cart.products[i].price.substring(0, cart.products[i].price.length - 1)) * cart.products[i].quantity;
        }
        return sum;
    }

    getProducts(username: string): Product[] {
        return this.carts.find(c => c.username === username).products;
    }

    getProductsCount(username: string): number {
        if (!username) {
            return 0;
        }
        let sum = 0;
        let cart = this.carts.find(c => c.username === username);
        for (let i = 0; i < cart.products.length; i++) {
            sum += cart.products[i].quantity;
        }
        return sum;
    }

    doesExist(product: Product, username: string): boolean {
        let cart = this.carts.find(c => c.username === username);
        for (let i = 0; i < cart.products.length; i++) {
            if (cart.products[i].title === product.title) {
                return true;
            }
        }
        return false;
    }

}