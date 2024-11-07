import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { CartItemsListComponent } from "./components/cart-items-list/cart-items-list.component";
import { ShoppingSummaryComponent } from "./components/shopping-summary/shopping-summary.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CartItemsListComponent, ShoppingSummaryComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent {
  
}
