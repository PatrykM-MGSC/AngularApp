import { Component } from '@angular/core';
import { ItemQuantityComponent } from '../item-quantity/item-quantity.component';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [ItemQuantityComponent],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})

export class CartItemComponent {}
