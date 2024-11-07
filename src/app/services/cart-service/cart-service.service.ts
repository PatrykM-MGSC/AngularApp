import { Injectable, signal, computed, Signal } from '@angular/core';
import { CartItem } from '../../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cartItems = signal<Map<number, CartItem>>(new Map());
  private cartName: string ="cartItems";

  constructor() {
    this.loadCartFromStorage();
  }

  addToCart(itemId: number) {
    const existingItem = this.cartItems().get(itemId);

    if (existingItem) {
      this.increaseQuantity(existingItem)
    } else {
      this.cartItems.set(new Map(this.cartItems()).set(itemId, { itemId: itemId, quantity: 1 }));
    }
    
    this.saveCartToStorage();
  }

  private increaseQuantity(existingItem: CartItem) {
    const cart = this.cartItems();
    cart.set(existingItem.itemId, { ...existingItem, quantity: existingItem.quantity + 1 });
    this.cartItems.set(new Map(cart));  
  }

  private saveCartToStorage() {
    localStorage.setItem(this.cartName, JSON.stringify(Array.from(this.cartItems().entries())));
  }

  private loadCartFromStorage() {
    const storedCart = localStorage.getItem(this.cartName);    
    if (storedCart) {
      const parsedCart: [number, CartItem][] = JSON.parse(storedCart);
      const cartMap = new Map<number, CartItem>(parsedCart);
      this.cartItems.set(cartMap);
    }
  }

  get cartItemsStorageCount (){
    return Array.from(this.cartItems().values()).reduce((total, cartItem) => total + cartItem.quantity, 0);
  };

  get cartItemsStorage(): CartItem[] {
    return Array.from(this.cartItems().values());
  }
}
