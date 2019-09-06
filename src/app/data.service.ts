import { v1 as uuid } from 'uuid';
import { Injectable } from '@angular/core';
import { Product } from 'src/model/product';
import { Category } from 'src/model/category';
import { ProductDisplayOptions } from 'src/model/product-display-options';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    productDisplayOptions: ProductDisplayOptions[] = [{ title: 'All', selected: true }, { title: 'Fruit', selected: false }, { title: 'Vegetable', selected: false }];
    categories: Category[] = [{ id: uuid(), title: 'Fruit' }, { id: uuid(), title: 'Vegetable' }];
    products: Product[] = [
        { title: 'Lettuce', categoryId: this.categories.find(c => c.title === 'Vegetable').id, categoryName: 'Vegetable', price: '2.89$', description: 'Key part of any salad', imgUrl: 'https://www.pngarts.com/files/1/Romaine-Lettuce-PNG-Image-With-Transparent-Background.png', fact:'It is without doubt the world’s most popular salad plant' },
        { title: 'Orange', categoryId: this.categories.find(c => c.title === 'Fruit').id, categoryName: 'Fruit', price: '1.49$', description: 'Fresh orange picked today!', imgUrl: 'https://www.pngarts.com/files/3/Mandarin-Orange-PNG-Transparent-Image.png', fact:'There are over 600 varieties of oranges worldwide.' },
        { title: 'Banana', categoryId: this.categories.find(c => c.title === 'Fruit').id, categoryName: 'Fruit', price: '1.99$', description: 'A great snack for the road', imgUrl: 'https://www.pngarts.com/files/3/Banana-Download-PNG-Image.png', fact:'The banana is actually classified as a berry.' },
        { title: 'Onion', categoryId: this.categories.find(c => c.title === 'Vegetable').id, categoryName: 'Vegetable', price: '0.99$', description: 'Wonderful and great for cooking', imgUrl: 'https://www.pngarts.com/files/3/Onion-Transparent-Image.png', fact:'One average sized onion has 30 calories.' },
        { title: 'Apple', categoryId: this.categories.find(c => c.title === 'Fruit').id, categoryName: 'Fruit', price: '1.99$', description: 'A fresh sweet red apple', imgUrl: 'https://ya-webdesign.com/transparent250_/apple-fruit-png.png', fact:'Apples contain no fat, sodium or cholesterol and are a good source of fiber.' },
        { title: 'Potato', categoryId: this.categories.find(c => c.title === 'Vegetable').id, categoryName: 'Vegetable', price: '1.29$', description: 'Great when cooked in camp fire', imgUrl: 'https://www.pngarts.com/files/3/Potato-PNG-Photo.png', fact:'Potatoes are 80% water.' },
        { title: 'Pepper', categoryId: this.categories.find(c => c.title === 'Vegetable').id, categoryName: 'Vegetable', price: '1.49$', description: 'Amazing both raw or cooked', imgUrl: 'https://ya-webdesign.com/transparent250_/reb-bell-pepper-png-1.png', fact:'Bell peppers are fruits, however, they are considered vegetables in culinary contexts.' }
    ];

    menuItems = ['home', 'about', 'products', 'contact'];
    adminMenuItems = ['home', 'about', 'products', 'contact', 'add product', 'logout', 'shopping cart'];
    userMenuItems = ['home', 'about', 'products', 'contact', 'logout', 'shopping cart'];
    lastClicked = 'home';


    socialMediaUrls = [
        'https://qvcc.edu/wp-content/uploads/2019/06/FB.png',
        'http://stagewp.sharethis.com/wp-content/uploads/2018/02/github.png',
        'https://s18955.pcdn.co/wp-content/uploads/2019/06/gmail-copy.png'
    ];

    my_profiles = [
        'https://www.facebook.com/eric.krief.7',
        'https://github.com/EricKrief',
        'mailto:erickrief1@gmail.com'
    ];

    getProductDisplayOptions(): ProductDisplayOptions[] {
        for (let i = 1; i < this.productDisplayOptions.length; i++) {
            this.productDisplayOptions[i].selected = false;
        }
        this.productDisplayOptions[0].selected = true;
        return this.productDisplayOptions;
    }

    getMenuItems(): string[] {
        return this.menuItems;
    }

    getLoggedInMenuItems(username: string) {
        if (username === 'admin') {
            return this.adminMenuItems;
        }
        else {
            return this.userMenuItems;
        }

    }

    getSocialMediaUrls(): string[] {
        return this.socialMediaUrls;
    }

    getProfileUrls(): string[] {
        return this.my_profiles;
    }

    getProducts(): Product[] {
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

    lastClickedMenuItem(menuItem: string) {
        this.lastClicked = menuItem;
    }

    getLastClicked(): string {
        return this.lastClicked;
    }

    addProductMenuItem() {
        this.menuItems.push('add product');
    }

    createProduct(title: string, category: string, price: number, image: string, description: string, fact:string) {
        let product: Product = {
            title: title, categoryName: category,
            price: price + '$', imgUrl: image,
            description: description, categoryId: this.getCategoryByName(category).id,
            fact: fact
        };

        this.products.push(product);
    }

    removeProductMenuItem() {
        let index = 0;
        for (let i = 0; i < this.menuItems.length; i++) {
            if (this.menuItems[i] === 'add product') {
                index = i;
            }
        }
        this.menuItems.splice(index, 1);
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