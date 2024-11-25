import { Component, Input } from '@angular/core';
import { ItemQuantityComponent } from '../item-quantity/item-quantity.component';
import { CartItem } from '../../../models/cart-item.model';
import { CartService } from '../../../services/cart-service/cart-service.service';
import { FormatPricePipe } from '../../../shared/pipes/format-price-pipe.pipe';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from '../../../shared/dialogs/confirm-delete-dialog/confirm-delete-dialog.component';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [ItemQuantityComponent, FormatPricePipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})

export class CartItemComponent {
  @Input({required: true}) cartItem!: CartItem;

  constructor(private cartService: CartService, private dialog: MatDialog) {}

  onDeleteClick(): void {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, { data:
      { titleKey: "confirmDeleteTitle", descriptionKey: "confirmDeleteDescription" },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.cartService.deleteItem(this.cartItem.itemId).catch((error) => {
          console.error('Error deleting item:', error);
        });
      }
    });
  }
}
