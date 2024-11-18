import { Injectable } from '@angular/core';
import { DUMMY_SHOPPING_ITEMS } from '../../dummy-data/dummy-shopping-item';

@Injectable({
  providedIn: 'root'
})

export class ShoppingItemsService {
  getShoppingItems() {
    return DUMMY_SHOPPING_ITEMS;
  }
}
