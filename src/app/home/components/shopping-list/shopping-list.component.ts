import { Component } from '@angular/core';
import { ShoppingItemComponent } from "../shopping-item/shopping-item.component";
import { DUMMY_SHOPPING_ITEMS } from '../../../dummy-data/dummy-shopping-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ShoppingItemComponent, CommonModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})

export class ShoppingListComponent {
    shoppingItems = DUMMY_SHOPPING_ITEMS;
}
