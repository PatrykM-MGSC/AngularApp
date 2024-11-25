import { Component, Input, OnChanges, OnInit, signal, Signal, SimpleChanges } from '@angular/core';
import { FormatPricePipe } from '../../../shared/pipes/format-price-pipe.pipe';
import { CartItem } from '../../../models/cart-item.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from '../../../shared/dialogs/confirm-delete-dialog/confirm-delete-dialog.component';
import { CartService } from '../../../services/cart-service/cart-service.service';

@Component({
  selector: 'app-shopping-summary',
  standalone: true,
  imports: [ FormatPricePipe ],
  templateUrl: './shopping-summary.component.html',
  styleUrl: './shopping-summary.component.scss'
})

export class ShoppingSummaryComponent implements OnChanges {
  @Input({required: true}) cartItems: CartItem[] = []; 

  private totalItemsAmount: number = 0;
  private totalTaxAmount: number = 0;
  private taxPercentage: number = 0.12;

  constructor(private dialog: MatDialog, private cartService: CartService) {}

  onDeleteClick(): void {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, { data:
      { titleKey: "confirmClearCartTitle", descriptionKey: "confirmClearCartDescription" },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.cartService.clear();
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cartItems']) {
      this.totalItemsAmount = this.calculateTotalAmount();
      this.totalTaxAmount = this.calculateTotalTax();
    }
  }

  private calculateTotalAmount(): number {
    let total = 0;
    this.cartItems.forEach((cartItem) => {
      if (cartItem.item) {
        total += cartItem.item.price * cartItem.quantity;
      }
    });

    return total;
  }

  private calculateTotalTax(): number {
    return this.totalAmount * this.taxPercentage;
  }

  get totalAmount() {
    return this.totalItemsAmount;
  }

  get totalTax(){
    return this.totalTaxAmount;
  }
}
