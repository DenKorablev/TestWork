import { Injectable } from '@angular/core';
import { observable } from 'mobx-angular';

@Injectable()
export class StoreService {
    @observable themeCurrent: string = 'ligth';
    @observable customValue: string = 'dada';
}