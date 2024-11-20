import { Injectable } from '@angular/core';
import { ShoppingItem } from '../../models/shopping-item.model';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ShoppingItemsService {
  private apiUrl = 'http://localhost:300';

  constructor(private http: HttpClient) {}

  getShoppingItems(): Observable<ShoppingItem[]> {
    return this.http.get<ShoppingItem[]>(this.apiUrl + "/shoppingItems");
  }

  getItemsByIds(ids: number[]): Observable<ShoppingItem[]> {
    return this.http.get<ShoppingItem[]>(this.apiUrl + "/shoppingItems").pipe(
      map(items => items.filter(item => ids.includes(item.id)))
    );
  }
}
