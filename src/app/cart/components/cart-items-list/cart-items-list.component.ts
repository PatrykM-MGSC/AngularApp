import { Component, Input } from '@angular/core';
import { CartItemComponent } from "../cart-item/cart-item.component";
import { CartItem } from '../../../models/cart-item.model';
import { BannerComponent } from "../../../shared/banner/banner.component";
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-cart-items-list',
  standalone: true,
  imports: [CartItemComponent, BannerComponent, CommonModule],
  templateUrl: './cart-items-list.component.html',
  styleUrl: './cart-items-list.component.css'
})
export class CartItemsListComponent {
  @Input({required: true}) cartItems!: CartItem[];
}
