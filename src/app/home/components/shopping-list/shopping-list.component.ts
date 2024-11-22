import { Component, Input } from '@angular/core';
import { ShoppingItemComponent } from "../shopping-item/shopping-item.component";
import { CommonModule } from '@angular/common';
import { ShoppingItem } from '../../../models/shopping-item.model';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ShoppingItemComponent, CommonModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})

export class ShoppingListComponent {
  @Input({required: true}) shoppingItems!: ShoppingItem[];
}
