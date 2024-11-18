import { Component, Input, OnInit } from '@angular/core';
import { ItemQuantityComponent } from '../item-quantity/item-quantity.component';
import { CartItem } from '../../../models/cart-item.model';
import { PriceFormatterService } from '../../../shared/price-formatter-service/price-formatter.service';
import { CartService } from '../../../services/cart-service/cart-service.service';
import { PopupWindowComponent } from "../../../shared/popup-window/popup-window.component";

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [ItemQuantityComponent, PopupWindowComponent],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})

export class CartItemComponent implements OnInit{
  @Input({required: true}) cartItem!: CartItem;
  private modalInstance: any;

  constructor(private priceFormatter: PriceFormatterService,
              private cartService: CartService
  ) {}

  ngOnInit(): void {
    import('bootstrap').then((bootstrap) => {
      const modalElement = document.getElementById('confirmationModal');
      if (modalElement) {
        this.modalInstance = new bootstrap.Modal(modalElement);
      } else {
        console.error('Modal element not found in the DOM.');
      }
    }).catch((err) => console.error('Bootstrap could not be loaded:', err));
  }

  get formattedPrice(): string {
    return this.priceFormatter.formatPrice(this.cartItem.item?.price);
  }

  onDeleteConfirmed() {
    this.cartService.deleteItem(this.cartItem.itemId)
      .then(() => {
        this.modalInstance.hide();
      })
      .catch((err) => {
        console.error("Failed to delete item:", err);
      });
  }
}
