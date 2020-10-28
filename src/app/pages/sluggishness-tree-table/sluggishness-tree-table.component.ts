import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

export interface TreeNodeInterface {
  key: number;
  name: string;
  age: number;
  level?: number;
  expand?: boolean;
  address: string;
  children?: TreeNodeInterface[];
}

@Component({
  selector: 'app-sluggishness-tree-table',
  templateUrl: './sluggishness-tree-table.component.html',
  styleUrls: ['./sluggishness-tree-table.component.less']
})

export class SluggishnessTreeTableComponent implements OnInit {
  public loading = false;
  public listOfMapData = [
    {
      key: 1,
      name: 'John Brown sr.',
      age: 60,
      address: 'New York No. 1 Lake Park',
      children: []
    },
    {
      key: 2,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      children: []
    }
  ];
  mapOfExpandedData: { [key: string]: TreeNodeInterface[] } = {};

  constructor() {
  }

  ngOnInit(): void {
    this.listOfMapData.forEach(item => {
      this.mapOfExpandedData[item.key] = this.convertTreeToList(item);
    });
  }

  collapse(array: TreeNodeInterface[], data: TreeNodeInterface, $event: boolean): void {
    if ($event === false) {
      if (data.children) {
        data.children.forEach(d => {
          // tslint:disable-next-line:no-non-null-assertion
          const target = array.find(a => a.key === d.key)!;
          target.expand = false;
          this.collapse(array, target, false);
        });
      } else {
        return;
      }
    }
    if ($event && data.children.length === 0) {
      this.loading = true;
      timer(1000).subscribe(() => {
        this.loading = false;
        const childData: TreeNodeInterface[] = [
          {
            key: Math.random(),
            name: `John Brown${Math.random()}`,
            age: 42,
            address: 'New York No. 2 Lake Park',
            children: []
          },
          {
            key: Math.random(),
            name: `John Brown jr.${Math.random()}`,
            age: 30,
            address: 'New York No. 3 Lake Park',
            children: []
          }
        ];
        data.children = childData;
        Array.from(childData).forEach((child) => {
          const childObj = {
            ...child,
            level: data.level + 1,
            expand: false,
            parent: data,
            children: []
          };
          // 插入到具体的节点中
          if (!array.map(opt => opt.key).includes(child.key)) {
            const childParentIndex = array.map(opt => opt.key).indexOf(data.key);
            array.splice(childParentIndex + 1, 0, childObj);
          }
        });
      });
    }
  }

  convertTreeToList(root: object): TreeNodeInterface[] {
    const stack: any[] = [];
    const array: any[] = [];
    const hashMap = {};
    stack.push({ ...root, level: 0, expand: false });

    while (stack.length !== 0) {
      const node = stack.pop();
      this.visitNode(node, hashMap, array);
      if (node.children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push({ ...node.children[i], level: node.level + 1, expand: false, parent: node });
        }
      }
    }

    return array;
  }

  visitNode(node: TreeNodeInterface, hashMap: { [key: string]: any }, array: TreeNodeInterface[]): void {
    if (!hashMap[node.key]) {
      hashMap[node.key] = true;
      array.push(node);
    }
  }

}
