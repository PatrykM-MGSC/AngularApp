import { Component, Input } from '@angular/core';
import { ShoppingItem } from '../../../models/shopping-item.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-item.component.html',
  styleUrl: './shopping-item.component.css'
})

export class ShoppingItemComponent {
  imgPath = "../../../assets/";
  @Input() item!: ShoppingItem;
}
