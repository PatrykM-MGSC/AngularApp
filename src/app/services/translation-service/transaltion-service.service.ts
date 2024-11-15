import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TranslationService {
  private translations: { [key: string]: string } = {
    'confirmDeleteTitle': 'Confirm Deletion',
    'confirmDeleteDescription': 'Are you sure you want to delete this item?',
    'cancelButton': 'Cancel',
    'confirmButton': 'Confirm'
  };

  setTranslation(key: string, value: string) {
    this.translations[key] = value;
  }

  getTranslation(key: string): string {
    return this.translations[key] || key;
  }
}
