import { effect, Injectable, signal } from '@angular/core';
import { ShoppingItem } from '../../models/shopping-item.model';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FetchDataService {
  private apiUrl = 'http://localhost:300';

  constructor(private http: HttpClient) {}

  getShoppingItems() {
    return toSignal(
      this.http.get<ShoppingItem[]>(this.apiUrl + '/shoppingItems'),
      { initialValue: [] }
    );
  }

  getItemsByIds(ids: number[]) {
    return toSignal(
      this.http.get<ShoppingItem[]>(this.apiUrl + '/shoppingItems').pipe(
        map(items => items.filter(item => ids.includes(item.id)))
      ),
      { initialValue: [] }
    );
  }
}
