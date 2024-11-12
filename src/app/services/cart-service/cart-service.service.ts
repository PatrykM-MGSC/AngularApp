import { Injectable, signal } from '@angular/core';
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
      this.changeQuantity(existingItem.itemId, existingItem.quantity + 1);
    } else {
      this.cartItems.set(new Map(this.cartItems()).set(itemId, { itemId: itemId, quantity: 1 }));
      this.saveCartToStorage();
    }
  }

  changeQuantity(itemId: number, newQuantity: number) {
    const cart = this.cartItems();
    const cartItem = cart.get(itemId)!;
    cart.set(itemId, { ...cartItem, quantity: newQuantity });
    this.cartItems.set(new Map(cart));
    this.saveCartToStorage();
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
