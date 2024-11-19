import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrice',
  standalone: true
})

export class FormatPricePipe implements PipeTransform {

  transform(price: number | undefined): string {
    if (price === undefined) {
      return "-";
    }
    
    return new Intl.NumberFormat('pl-PL', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      useGrouping: true,
    }).format(price) + ' PLN';
  }

}
