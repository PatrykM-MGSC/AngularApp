import { Component, Input } from '@angular/core';
import { ItemQuantityComponent } from '../item-quantity/item-quantity.component';
import { CartItem } from '../../../models/cart-item.model';
import { PriceFormatterService } from '../../../shared/price-formatter-service/price-formatter.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [ItemQuantityComponent],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})

export class CartItemComponent {
  @Input({required: true}) cartItem!: CartItem;

  constructor(private priceFormatter: PriceFormatterService) {}

  get formattedPrice(): string {
    return this.priceFormatter.formatPrice(this.cartItem.item?.price);
  }
}
