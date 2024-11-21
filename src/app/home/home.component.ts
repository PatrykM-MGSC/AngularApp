import { Component, computed, Signal, signal } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { CartWidgetComponent } from "../shared/cart-widget/cart-widget.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { BannerComponent } from '../shared/banner/banner.component';
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";
import { FetchDataService } from '../services/fetch-data-service/fetch-data-service.service';
import { ShoppingItem } from '../models/shopping-item.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CartWidgetComponent, FooterComponent, 
    BannerComponent, ShoppingListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  private shoppingItemsList: Signal<ShoppingItem[]> = signal<ShoppingItem[]>([]);

  constructor(private fetchDataService: FetchDataService) {
    this.loadShoppingItems();
  }

  private loadShoppingItems() {
    this.shoppingItemsList= this.fetchDataService.getShoppingItems();
  }

  get shoppingItems() {
    return this.shoppingItemsList;
  }
}
