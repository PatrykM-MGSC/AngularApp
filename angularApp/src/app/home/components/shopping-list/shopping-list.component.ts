import { Component } from '@angular/core';
import { ShoppingItemComponent } from "../shopping-item/shopping-item.component";

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ShoppingItemComponent],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})

export class ShoppingListComponent {}
