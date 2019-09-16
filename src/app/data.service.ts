import { v1 as uuid } from 'uuid';
import { Injectable } from '@angular/core';
import { Product } from 'src/model/product';
import { Category } from 'src/model/category';
import { ProductDisplayOptions } from 'src/model/product-display-options';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class DataService {

    productDisplayOptions: ProductDisplayOptions[];
    categories: Category[];
    products: Product[];
    socialMediaUrls: string[];
    myProfiles: string[];

    constructor(private http: HttpClient) {
        this.http.get('assets/data.json').toPromise().then(data => {
            this.initData(data);
        });
    }

    initData(data: any): void {
        this.categories = data.categories;
        this.categories.forEach(category => {
            category.id = uuid()
        });
        this.products = data.products;
        this.products.forEach(product => {
            product.categoryId = this.categories.find(c => c.title === product.categoryName).id;
        });
        this.productDisplayOptions = data.productDisplayOptions;
        this.socialMediaUrls = data.socialMediaUrls;
        this.myProfiles = data.myProfiles;
    }



    getProductDisplayOptions(): ProductDisplayOptions[] {
        this.productDisplayOptions.forEach(option => option.selected = false);
        this.productDisplayOptions[0].selected = true;
        return this.productDisplayOptions;
    }


    getSocialMediaUrls(): string[] {
        return this.socialMediaUrls;
    }

    getProfileUrls(): string[] {
        return this.myProfiles;
    }

    getProducts() {
        return this.products;
    }

    getProductByName(name: string) {
        return this.products.find(product => product.title === name);
    }

    getCategories(): Category[] {
        return this.categories;
    }

    getCategoryByName(category: string) {
        return this.categories.find(c => c.title === category);
    }

    createProduct(title: string, category: string, price: number, image: string, description: string, fact: string) {
        let product: Product = {
            title: title, categoryName: category,
            price: price + '$', imgUrl: image,
            description: description, categoryId: this.getCategoryByName(category).id,
            fact: fact
        };

        this.products.push(product);
    }

    updateProduct(product: Product, oldTitle: string) {
        for (let i = 0; i < this.products.length; i++) {
            if (oldTitle !== null) {
                if (this.products[i].title === oldTitle) {
                    this.products[i] = product;
                }
            }
            else if (this.products[i].title === product.title) {
                this.products[i] = product;
            }
        }
    }

}