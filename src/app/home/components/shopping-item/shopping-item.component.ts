import { Component, Input } from '@angular/core';
import { ShoppingItem } from '../../../models/shopping-item.model';
import { CommonModule } from '@angular/common';
import { PriceFormatterService } from '../../../shared/price-formatter-service/price-formatter.service'; 
import { CartService } from '../../../services/cart-service/cart-service.service';

@Component({
  selector: 'app-shopping-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-item.component.html',
  styleUrl: './shopping-item.component.css'
})

export class ShoppingItemComponent {
  constructor(private priceFormatter: PriceFormatterService,
              private cartService: CartService) {}

  @Input({required: true}) item!: ShoppingItem;
  
  get formattedPrice(): string {
    return this.priceFormatter.formatPrice(this.item.price);
  }

  get imgPath() {
    return "../../../assets/" + this.item.imgFile;
  }

  onAddToCart() {
    this.cartService.addToCart(this.item.id);
  }
}
