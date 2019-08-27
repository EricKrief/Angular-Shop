import { v1 as uuid } from "uuid";
import { Injectable } from '@angular/core';
import { Product } from 'src/model/product';
import { Category } from 'src/model/category';
import { ProductDisplayOptions } from 'src/model/product-display-options';

@Injectable({
    providedIn: "root"
})
export class DataService {

    productDisplayOptions: ProductDisplayOptions[] = [{ title: "All", selected: true }, { title: "Fruit", selected: false }, { title: "Vegetable", selected: false }];
    categories: Category[] = [{ id: uuid(), title: "Fruit" }, { id: uuid(), title: "Vegetable" }];
    products: Product[] = [
        { title: "Lettuce", categoryId: this.categories.find(c => c.title === "Vegetable").id, categoryName: "Vegetable", price: "2.89$", description: "Key part of any salad", imgUrl: "https://www.pngarts.com/files/1/Romaine-Lettuce-PNG-Image-With-Transparent-Background.png" },
        { title: "Orange", categoryId: this.categories.find(c => c.title === "Fruit").id, categoryName: "Fruit", price: "1.49$", description: "Fresh orange picked today!", imgUrl: "https://www.pngarts.com/files/3/Mandarin-Orange-PNG-Transparent-Image.png" },
        { title: "Banana", categoryId: this.categories.find(c => c.title === "Fruit").id, categoryName: "Fruit", price: "1.99$", description: "A great snack for the road", imgUrl: "https://www.pngarts.com/files/3/Banana-Download-PNG-Image.png" },
        { title: "Onion", categoryId: this.categories.find(c => c.title === "Vegetable").id, categoryName: "Vegetable", price: "0.99$", description: "Wonderful and great for cooking", imgUrl: "https://www.pngarts.com/files/3/Onion-Transparent-Image.png" },
        { title: "Apple", categoryId: this.categories.find(c => c.title === "Fruit").id, categoryName: "Fruit", price: "1.99$", description: "A fresh sweet red apple", imgUrl: "https://ya-webdesign.com/transparent250_/apple-fruit-png.png" },
        { title: "Potato", categoryId: this.categories.find(c => c.title === "Vegetable").id, categoryName: "Vegetable", price: "1.29$", description: "Great when cooked in camp fire", imgUrl: "https://www.pngarts.com/files/3/Potato-PNG-Photo.png" },
        { title: "Pepper", categoryId: this.categories.find(c => c.title === "Vegetable").id, categoryName: "Vegetable", price: "1.49$", description: "Amazing both raw or cooked", imgUrl: "https://ya-webdesign.com/transparent250_/reb-bell-pepper-png-1.png" }
    ];

    menuItems = ["home", "about", "products", "contact"];
    lastClicked = 'home';


    socialMediaUrls = [
        "https://qvcc.edu/wp-content/uploads/2019/06/FB.png",
        "http://stagewp.sharethis.com/wp-content/uploads/2018/02/github.png",
        "https://s18955.pcdn.co/wp-content/uploads/2019/06/gmail-copy.png"
    ];

    my_profiles = [
        "https://www.facebook.com/eric.krief.7",
        "https://github.com/EricKrief",
        "mailto:erickrief1@gmail.com"
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

    getSocialMediaUrls(): string[] {
        return this.socialMediaUrls;
    }

    getProfileUrls(): string[] {
        return this.my_profiles;
    }

    getProducts(): Product[] {
        return this.products;
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

    createProduct(title: string, category: string, price: number, image: string, description: string) {
        let product: Product = {
            title: title, categoryName: category,
            price: price + '$', imgUrl: image,
            description: description, categoryId: this.getCategoryByName(category).id
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