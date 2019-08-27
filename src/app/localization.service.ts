import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalizationService {

    languages: string[] = ["english", 'עברית', 'espanol'];
    currentLanguage: string = 'english';
    allLanguages = {
        english: {
            'home': 'home',
            'about': 'about',
            'contact': 'contact',
            'products': 'products',
            'add product': 'add product',
            'login': 'login',
            'logout': 'logout',
            'shopping cart': 'shopping cart'
        },

        עברית: {
            'home': 'בית',
            'about': 'אודות',
            'contact': 'צור קשר',
            'products': 'מוצרים',
            'add product': 'הוסף מוצר',
            'login': 'התחבר',
            'logout': 'התנתק',
            'shopping cart': 'עגלת מוצרים'
        },

        espanol: {
            'home': 'inicio',
            'about': 'acerca de',
            'contact': 'contacto',
            'products': 'productos',
            'add product': 'Añadir Producto',
            'login': 'iniciar sesión',
            'logout': 'cerrar sesión',
            'shopping cart': 'carrito compras'

        }
    }

    getTranslatedWord(word: string, language: string) {
        return this.allLanguages[language][word];
    }

    changeLanguage(language: string) {
        this.currentLanguage = language;
    }

    getLanguages() {
        return this.languages;
    }

}