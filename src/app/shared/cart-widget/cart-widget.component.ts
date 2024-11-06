import { Component, computed } from '@angular/core';
import { CartService } from '../../services/cart-service/cart-service.service';

@Component({
  selector: 'app-cart-widget',
  standalone: true,
  imports: [],
  templateUrl: './cart-widget.component.html',
  styleUrl: './cart-widget.component.css'
})

export class CartWidgetComponent {
  constructor(private cartService: CartService) {}

  itemCount = computed(() => this.cartService.getCartItemsCount());
}
