import { Injectable } from '@angular/core';
import { Language } from 'src/model/language';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LocalizationService {

    languageTitles: string[] = [];
    languages: Language[] = [];
    currentLanguage: string;

    constructor(private http: HttpClient) {
        this.http.get('assets/languages.json').toPromise().then((json: any) => {
            this.languages = json.languages;
            this.currentLanguage = json.defaultLanguage;
            this.languages.forEach(language => this.languageTitles.push(language.title));
        });
    }

    getTranslatedWord(word: string, language: string) {
        return this.languages.find(l => l.title === language).wordMapping[word];
    }

    changeLanguage(language: string) {
        this.currentLanguage = language;
    }

    getLanguageTitles() {
        return this.languageTitles;
    }

}