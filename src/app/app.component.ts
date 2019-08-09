import { Component } from '@angular/core';
import { v1 as uuid } from "uuid";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  displayPage = "home";
  product;
  showMenu = false;
  categories = [{ id: uuid(), title: "fruit" }, { id: uuid(), title: "vegetable" }];
  products = [
    { title: "Lettuce", categoryId: this.categories.find(c => c.title === "vegetable").id, categoryName: "Vegetable", price: "2.89$", description: "Key part of any salad", img: "https://www.pngarts.com/files/1/Romaine-Lettuce-PNG-Image-With-Transparent-Background.png" },
    { title: "Orange", categoryId: this.categories.find(c => c.title === "fruit").id, categoryName: "Fruit", price: "1.49$", description: "Fresh orange picked today!", img: "https://www.pngarts.com/files/3/Mandarin-Orange-PNG-Transparent-Image.png" },
    { title: "Banana", categoryId: this.categories.find(c => c.title === "fruit").id, categoryName: "Fruit", price: "1.99$", description: "A great snack for the road", img: "https://www.pngarts.com/files/3/Banana-Download-PNG-Image.png" },
    { title: "Onion", categoryId: this.categories.find(c => c.title === "vegetable").id, categoryName: "Vegetable", price: "0.99$", description: "Wonderful and great for cooking", img: "https://www.pngarts.com/files/3/Onion-Transparent-Image.png" },
    { title: "Apple", categoryId: this.categories.find(c => c.title === "fruit").id, categoryName: "Fruit", price: "1.99$", description: "A fresh sweet red apple", img: "https://ya-webdesign.com/transparent250_/apple-fruit-png.png" },
    { title: "Potato", categoryId: this.categories.find(c => c.title === "vegetable").id, categoryName: "Vegetable", price: "1.29$", description: "Great when cooked in camp fire", img: "https://www.pngarts.com/files/3/Potato-PNG-Photo.png" },
    { title: "Pepper", categoryId: this.categories.find(c => c.title === "vegetable").id, categoryName: "Vegetable", price: "1.49$", description: "Amazing both raw or cooked", img: "https://ya-webdesign.com/transparent250_/reb-bell-pepper-png-1.png" }
  ];

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  backClicked(){
    this.displayPage = "products";
  }

  showProductDetails(product){
    this.displayPage="details";
    this.product=product;
  }

  changePage(event) {
    this.displayPage = event;
  }
}
