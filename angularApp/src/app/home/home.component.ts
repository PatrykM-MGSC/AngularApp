import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { CartWidgetComponent } from "../shared/cart-widget/cart-widget.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { BannerComponent } from '../shared/banner/banner.component';
import { ShoppingListComponent } from "./components/shopping-list/shopping-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CartWidgetComponent, FooterComponent, 
    BannerComponent, ShoppingListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {}
