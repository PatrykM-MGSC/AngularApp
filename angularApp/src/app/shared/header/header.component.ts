import { Component } from "@angular/core";
import { BannerComponent } from "../banner/banner.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [BannerComponent]
})

export class HeaderComponent {}
