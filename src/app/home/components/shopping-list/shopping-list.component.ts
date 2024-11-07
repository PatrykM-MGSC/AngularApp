import { Component, OnInit } from '@angular/core';
import { ShoppingItemComponent } from "../shopping-item/shopping-item.component";
import { CommonModule } from '@angular/common';
import { ShoppingItemsService } from '../../../services/fetch-data-services/shopping-items-service.service';
import { ShoppingItem } from '../../../models/shopping-item.model';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ShoppingItemComponent, CommonModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})

export class ShoppingListComponent implements OnInit {
  private shoppingItemsList: ShoppingItem[] = [];

  constructor(private shoppingItemsService: ShoppingItemsService) {}

  ngOnInit() {
    this.loadShoppingItems();
  }

  private loadShoppingItems() {
    this.shoppingItemsList = this.shoppingItemsService.getShoppingItems();
  }

  get shoppingItems() {
    return this.shoppingItemsList;
  }
}
