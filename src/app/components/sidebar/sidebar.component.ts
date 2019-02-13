import {NestedTreeControl} from '@angular/cdk/tree';
import {Component, Output} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { EventEmitter } from '@angular/core';
import { AddProductsService } from '../../service/addProducts.service';

interface FoodNode {
  name: string;
  category?: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Все товары', category: null
  },
  {
    name: 'Одежда',
    children: [
      {name: 'Зимняя', category: 'winterClothes'},
      {name: 'Летняя', category: 'summerClothes'}
    ]
  }, {
    name: 'Спортивные товары',
    children: [
      {
        name: 'Зима', category: 'winter',
      },
      {
        name: 'Лето', category: 'summer',
      },
      {
        name: 'Лето',
        children: [
          {name: 'Мячи', category: 'ball'},
          {name: 'Велосипеды', category: 'bike'},
        ]
      }, {
        name: 'Спортзал', category: 'gym'
      }
    ]
  },
];

@Component({
  selector: 'zds-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  @Output() selectedCategory = new EventEmitter<string>();
  selectCategory = this.addProductsService.selectedCategory;
  constructor(
    private addProductsService: AddProductsService
    ) { this.dataSource.data = TREE_DATA; }

  changeCategory(category: string) {
    this.selectCategory = category;
    this.selectedCategory.emit(category);
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}
