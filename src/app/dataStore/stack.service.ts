import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StackService {

  private dataStore = [];
  private top = 0;

  constructor() {
  }

  // 进栈
  public push(item) {
    this.dataStore[this.top++] = item;
  }

  // 出栈
  public pop() {
    return this.dataStore[--this.top];
  }

  // 查看栈顶元素
  public peek() {
    return this.dataStore[this.top - 1];
  }

  // 查看栈的长度
  public length() {
    return this.top;
  }

  // 清空栈
  public clear() {
    this.top = 0;
  }
}
