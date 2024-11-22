import { Component, Input, signal } from '@angular/core';
import { CartService } from '../../../services/cart-service/cart-service.service';

@Component({
  selector: 'app-item-quantity',
  standalone: true,
  imports: [],
  templateUrl: './item-quantity.component.html',
  styleUrl: './item-quantity.component.scss'
})
export class ItemQuantityComponent {
  @Input({required: true}) quantity!: number;
  @Input({required: true}) id!: number;

  constructor(private cartService: CartService) {}

  onChangeQuantityPlus() {
    this.quantity = this.quantity + 1
    this.cartService.changeQuantity(this.id, this.quantity);
  }

  onChangeQuantityMinus() {
    const newQuantity = this.quantity - 1;
    
    if (newQuantity > 0) {
      this.cartService.changeQuantity(this.id, newQuantity);
      this.quantity = newQuantity;
    }
  }
}
