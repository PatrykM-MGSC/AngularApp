import { Component, computed } from '@angular/core';
import { CartService } from '../../services/cart-service/cart-service.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart-widget',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cart-widget.component.html',
  styleUrl: './cart-widget.component.css'
})

export class CartWidgetComponent {
  constructor(private cartService: CartService) {}

  itemCount = computed(() => this.cartService.cartItemsStorageCount);
}
