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
  cartMappedItems: CartItem[] = []
  private filteredShoppingItems: Signal<ShoppingItem[]> = signal<ShoppingItem[]>([]);

  constructor(private cartService: CartService, private fetchDataService: FetchDataService) {
    this.getFilteredShoppingItems();
    /* 
      i dont know what its not working without effect().
      this.mapCartItems() returns empty filteredShoppingItems signal,
      because data was not fetched when this.mapCartItems() funcion was executed. But why
      if i used signal. when i try using:
        this.filteredShoppingItems = computed(() => this.fetchDataService.getItemsByIds(cartItemsIds))
      or 
        this.filteredShoppingItems = () => this.fetchDataService.getItemsByIds(cartItemsIds)()
      in mapCartItems() body i have error:
        NG0602: toSignal() cannot be called from within a reactive context. Invoking `toSignal`
         causes new subscriptions every time. Consider moving `toSignal` outside of the reactive 
         context and read the signal value where needed.
    */
      
    effect(()=> this.mapCartItems())
  }

  private getFilteredShoppingItems() {
    const cartItemsIds = this.cartService.cartItemsStorage.map(cartItem => cartItem.itemId)
    this.filteredShoppingItems = this.fetchDataService.getItemsByIds(cartItemsIds);
  }

  private mapCartItems() {
    const cartItems = computed(() => this.cartService.cartItemsStorage);
    this.cartMappedItems = cartItems().map(cartItem => {
      const matchedItem = this.filteredShoppingItems().find(item => item.id === cartItem.itemId);
      return { ...cartItem, item: matchedItem }
    });
  }

  get cartItems() {
    return this.cartMappedItems
  }
}
