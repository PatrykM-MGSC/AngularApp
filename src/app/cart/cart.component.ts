import { Component, computed, signal } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { CartItemsListComponent } from "./components/cart-items-list/cart-items-list.component";
import { ShoppingSummaryComponent } from "./components/shopping-summary/shopping-summary.component";
import { CartService } from '../services/cart-service/cart-service.service';
import { CartItem } from '../models/cart-item.model';
import { BannerComponent } from "../shared/banner/banner.component";
import { CommonModule } from '@angular/common';
import { ShoppingItemsService } from '../services/fetch-data-service/fetch-data-service.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CartItemsListComponent,
    ShoppingSummaryComponent, BannerComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent {
  cartMappedItems = signal<CartItem[]>([]);

  constructor(private cartService: CartService, private shoppingItemsService: ShoppingItemsService) {
    this.loadShoppingItemsByCartItemsId();
  }
//json-server --watch .\src\app\dummy-data\db-dummy-data.json --port 300
  private loadShoppingItemsByCartItemsId() {
    const cartItems = computed(() => this.cartService.cartItemsStorage);
    const cartItemsIds = cartItems().map(cartItem => cartItem.itemId);

    this.shoppingItemsService.getItemsByIds(cartItemsIds).subscribe(shoppingItems => {
      const mappedItems = cartItems().map(cartItem => {
        const matchedItem = shoppingItems.find(item => item.id === cartItem.itemId);
        return { ...cartItem, item: matchedItem };
      });

      this.cartMappedItems.set(mappedItems);
    });
  }

  get cartItems() {
    return this.cartMappedItems()
  }

}
