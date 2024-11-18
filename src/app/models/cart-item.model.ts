import { ShoppingItem } from "./shopping-item.model";

export interface CartItem {
    itemId: number;
    item?: ShoppingItem
    quantity: number;
  }
  