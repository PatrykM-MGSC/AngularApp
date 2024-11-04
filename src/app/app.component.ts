import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PopupWindowComponent } from "./shared/popup-window/popup-window.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, PopupWindowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angularApp';
}
