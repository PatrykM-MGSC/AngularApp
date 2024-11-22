import { Component, Input } from '@angular/core';
import { ItemQuantityComponent } from '../item-quantity/item-quantity.component';
import { CartItem } from '../../../models/cart-item.model';
import { CartService } from '../../../services/cart-service/cart-service.service';
import { FormatPricePipe } from '../../../shared/pipes/format-price-pipe.pipe';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [ItemQuantityComponent, FormatPricePipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})

export class CartItemComponent {
  @Input({required: true}) cartItem!: CartItem;
  private modalInstance: any;

  constructor(private cartService: CartService) {}

}
