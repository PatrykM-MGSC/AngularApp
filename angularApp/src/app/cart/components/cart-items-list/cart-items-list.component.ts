import { Component } from '@angular/core';
import { CartItemComponent } from "../cart-item/cart-item.component";

@Component({
  selector: 'app-cart-items-list',
  standalone: true,
  imports: [CartItemComponent],
  templateUrl: './cart-items-list.component.html',
  styleUrl: './cart-items-list.component.css'
})
export class CartItemsListComponent {}
