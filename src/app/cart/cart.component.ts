import { Component, computed, effect, Signal, signal } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { CartItemsListComponent } from "./components/cart-items-list/cart-items-list.component";
import { ShoppingSummaryComponent } from "./components/shopping-summary/shopping-summary.component";
import { CartService } from '../services/cart-service/cart-service.service';
import { CartItem } from '../models/cart-item.model';
import { BannerComponent } from "../shared/banner/banner.component";
import { CommonModule } from '@angular/common';
import { FetchDataService } from '../services/fetch-data-service/fetch-data-service.service';
import { ShoppingItem } from '../models/shopping-item.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CartItemsListComponent,
    ShoppingSummaryComponent, BannerComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent {
  cartMappedItems: Signal<CartItem[]> = signal<CartItem[]>([]);
  private filteredShoppingItems: Signal<ShoppingItem[]> = signal<ShoppingItem[]>([]);

  constructor(private cartService: CartService, private fetchDataService: FetchDataService) {
    this.getFilteredShoppingItems();
    this.mapCartItems()
  }

  private getFilteredShoppingItems() {
    const cartItemsIds = this.cartService.cartItemsStorage.map(cartItem => cartItem.itemId)
    this.filteredShoppingItems = this.fetchDataService.getItemsByIds(cartItemsIds);
  }

  private mapCartItems() {
    const cartItems = computed(() => this.cartService.cartItemsStorage);
    this.cartMappedItems = computed(() => {
    return cartItems().map(cartItem => {
      const matchedItem = this.filteredShoppingItems().find(item => item.id === cartItem.itemId);
      return { ...cartItem, item: matchedItem };
      });
    });
  }

  get cartItems() {
    return this.cartMappedItems
  }
}
