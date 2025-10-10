import { Injectable } from '@angular/core';
import { englishTexts, spanishTexts } from '../texts';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLang: 'en' | 'es' = 'en';

  getCurrentLang() {
    return this.currentLang;
  }

  setLanguage(lang: 'en' | 'es') {
    this.currentLang = lang;
  }

  getText(key: string): string {
    const texts = this.currentLang === 'en' ? englishTexts : spanishTexts;
    return (texts as any)[key] || key;
  }

  constructor() { }
}