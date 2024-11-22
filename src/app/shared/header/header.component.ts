import { Component, computed } from "@angular/core";
import { BannerComponent } from "../banner/banner.component";
import { RouterModule } from '@angular/router';
import { CartService } from "../../services/cart-service/cart-service.service";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [BannerComponent, RouterModule]
})

export class HeaderComponent {
    constructor(private cartService: CartService) {}
    
    cartItemsCount = computed(() => this.cartService.cartItemsStorageCount);
}
