import { Component, Input } from '@angular/core';
import { ShoppingItem } from '../../../models/shopping-item.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart-service/cart-service.service';
import { FormatPricePipe } from '../../../shared/pipes/format-price-pipe.pipe';

@Component({
  selector: 'app-shopping-item',
  standalone: true,
  imports: [CommonModule, FormatPricePipe],
  templateUrl: './shopping-item.component.html',
  styleUrl: './shopping-item.component.css'
})

export class ShoppingItemComponent {
  constructor(private cartService: CartService) {}

  @Input({required: true}) item!: ShoppingItem;

  get imgPath() {
    return "../../../assets/" + this.item.imgFile;
  }

  onAddToCart() {
    this.cartService.addToCart(this.item.id);
  }
}
