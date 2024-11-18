import { Component, computed } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { CartItemsListComponent } from "./components/cart-items-list/cart-items-list.component";
import { ShoppingSummaryComponent } from "./components/shopping-summary/shopping-summary.component";
import { CartService } from '../services/cart-service/cart-service.service';
import { ShoppingItemsService } from '../services/fetch-data-services/shopping-items-service.service';
import { CartItem } from '../models/cart-item.model';
import { BannerComponent } from "../shared/banner/banner.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CartItemsListComponent,
    ShoppingSummaryComponent, BannerComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent {
  private cartMappedItems: CartItem[] = [];

  constructor(private cartService: CartService, private shoppingItemsService: ShoppingItemsService) {
    this.loadShoppingItemsByCartItemsId();
  }

  private loadShoppingItemsByCartItemsId() {
    const cartItems = computed(() => this.cartService.cartItemsStorage);
    const cartItemsIds = cartItems().map(cartItem => cartItem.itemId);
    const shoppingItems = this.shoppingItemsService.getItemsByIds(cartItemsIds);

    this.cartMappedItems = cartItems().map(cartItem => {
      const matchedItem = shoppingItems.find(item => item.id === cartItem.itemId);
      return { ...cartItem, item: matchedItem };
    });
  }

  get cartItems() {
    return this.cartMappedItems
  }

}
