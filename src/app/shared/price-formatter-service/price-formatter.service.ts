import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriceFormatterService {
  constructor() { }

  formatPrice(price: number): string {
    return price.toLocaleString('pl-PL') + ' PLN';
  }
}
