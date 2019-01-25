import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item.model';
import { Observable } from 'rxjs';

@Injectable()
export class ItemService {
    constructor(private http: HttpClient) {}

    getItem(): Observable<any> {
        return this.http.get('http://localhost:3000/products');
    }

    createNewItem(item: Item): Observable<any> {
        return this.http.post('http://localhost:3000/products', item);
    }

    removeItem(item: Item): Observable<any> {
        return this.http.delete(`http://localhost:3000/products/${item.id}`);
    }
}