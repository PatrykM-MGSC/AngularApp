import { Injectable } from '@angular/core';
import { DUMMY_SHOPPING_ITEMS } from '../../dummy-data/dummy-shopping-item';
import { ShoppingItem } from '../../models/shopping-item.model';

@Injectable({
  providedIn: 'root'
})

export class ShoppingItemsService {
  private shoppingItems: ShoppingItem[] = []

  constructor() {
    this.shoppingItems = DUMMY_SHOPPING_ITEMS;
  }

  getShoppingItems() {
    return this.shoppingItems;
  }

  getItemsByIds(ids: number[]) {
    return this.shoppingItems.filter(item => ids.includes(item.id));
  }
}
