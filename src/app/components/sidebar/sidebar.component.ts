import {NestedTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Одежда',
    children: [
      {name: 'Зимняя'},
      {name: 'Летняя'}
    ]
  }, {
    name: 'Спортивные товары',
    children: [
      {
        name: 'Зима',
        children: [
          {name: 'Лыжи'},
          {name: 'Хоккей'},
        ]
      },
      {
        name: 'Лето',
        children: [
          {name: 'Мячи'},
          {name: 'Велосипеды'},
        ]
      }, {
        name: 'Спортзал'
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

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}