import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularApp';
}
