import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.less']
})
export class EditTableComponent implements OnInit {
  dataSet = [
    {
      key: '1',
      name: 'John Brown',
      status: 'edit',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      status: 'edit',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      status: 'edit',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  handledblClick(data) {
    data.status = 'edit';
  }

  handleBlur(data) {
    data.status = 'show';
  }
}
