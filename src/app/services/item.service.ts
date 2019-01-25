import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item.model';
import { Observable } from 'rxjs';

@Injectable()
export class ItemService {
    constructor(private http: HttpClient) {}

    createNewItem(item: Item): Observable<any> {
        return this.http.post('http://localhost:3000/products', item);
    }
}