import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriceFormatterService {
  constructor() { }

  formatPrice(price: number | undefined): string {
    if (price === undefined)
      return "-"
    
    return new Intl.NumberFormat('pl-PL', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      useGrouping: true,
    }).format(price) + ' PLN';
  }
}
