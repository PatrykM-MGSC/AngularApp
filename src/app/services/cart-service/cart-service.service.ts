import { Injectable, signal, Signal } from '@angular/core';
import { CartItem } from '../../models/cart-item.model';
import { ShoppingItem } from '../../models/shopping-item.model';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cartItems: CartItem[] = [];
  private itemsAddToCart = signal(0);

  addToCart(item: ShoppingItem) {
    const existingItem = this.cartItems.find(cartItem => cartItem.itemId === item.id);
    
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ itemId: item.id, quantity: 1 });
    }

    this.updateItemCount();
  }

  private updateItemCount() {
    const count = this.cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    this.itemsAddToCart.set(count);
  }

  getCartItemsCount(): number {
    return this.itemsAddToCart();
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }
}
