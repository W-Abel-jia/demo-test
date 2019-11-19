import {Component, OnInit} from '@angular/core';
import {StackService} from '../dataStore/stack.service';

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.less']
})
export class IntroduceComponent implements OnInit {

  public demoStack = new StackService();

  constructor() {
  }

  ngOnInit() {
    // console.log('x'.padStart(5, 'ab'));
    // console.log('x'.padEnd(5, 'ab'));
    // console.log('XXXXX'.padEnd(5, 'ab'));
    // console.log('abc'.padStart(10, '0123456789'));
    // console.log('x'.padStart(4));
    // console.log('1'.padStart(10, '0'));
    // console.log('12'.padStart(10, 'YYYY-MM-DD'));
    // console.log('12dasdasd'.match(/[1-9]\d*/g));
    // const s = 'abc';
    // console.log('abc'.anchor('demo'));
    // console.log('abc'.big());
    // console.log('abc'.blink());
    // console.log('abc'.bold());
    // console.log('acd'.charAt(2));
    // console.log('acd'.charAt(4));
    // console.log('acd'.charCodeAt(2));
    // console.log('acd'.concat('d', 'd', 'wqe'));
    // console.log('acd'.concat('cde'));
    // console.log('acd'.fixed());
    // console.log('acd'.fontcolor('red'));
    // console.log('acd'.fontsize('14px'));
    // console.log(String.fromCharCode(97));
    // console.log(String.fromCharCode(72, 69, 76, 76, 79));
    // console.log('hello'.indexOf('o'));
    // console.log('hello'.italics());
    // console.log('hello'.indexOf('p'));
    // console.log('hello'.lastIndexOf('l'));
    // console.log('hello'.lastIndexOf('p'));
    // console.log('hello'.link('www.csdn.net/'));
    // console.log('12dasdasd34'.match(/[1-9]\d*/g));
    // console.log('12dasdasd34'.replace('a', '##'));
    // console.log('12dasdasd34'.replace(/[1-9]\d*/g, 'ed'));
    // console.log('dasdasd123'.search(/[1-9]\d*/g));
    // console.log('dasdasd123'.slice(3, 8));
    // console.log('dasdasd123'.split('', 3));
    // console.log('dasdasd123'.split(/[1-9]\d*/g));
    // console.log('dasdasd123'.substr(2, 5));
    // console.log('dasdasd123'.substring(2, 5));
    // console.log('QAQAQA'.toLocaleLowerCase());
    // console.log('QAQAQA'.toLowerCase());
    console.log('aaaa'.toLocaleUpperCase());
    console.log('aaaa'.toUpperCase());

    // console.log(s.trimStart());
    // console.log(s.trimEnd());
    // // "abc"
    // s.trimStart(); // "abc  "
    // s.trimEnd(); // "  abc"
    // console.log('x'.repeat('4')); // 'xxxx';
    // console.log('x'.repeat('hh')); // 'xxxx';
    // console.log('x'.repeat(3.8)); // 'xxxx';
    // console.log('x'.repeat(-0.8)); // 'xxxx';
    // console.log('x'.repeat(Infinity)); // 'xxxx';
    // let s = '𠮷';
    // console.log(s.length); // 2
    // console.log(s.endsWith()); // 2
    // console.log(s.charCodeAt(0)); // 55362
    // console.log(s.charCodeAt(1)); // 57271
    // console.log(s.codePointAt(0)); // 134071
    // console.log(s.codePointAt(1)); // 57271
    // alert`2134`;
//     const template = `
// <ul>
//   <% for(let i=0; i < data.supplies.length; i++) { %>
//     <li><%= data.supplies[i] %></li>
//   <% } %>
// </ul>
// `;
    // console.log('\u{1F680}');
    // console.log('\u{20BB7}');
    // console.log('\u{41}\u{42}\u{43}');

    // console.log('\u2028');
    // console.log('\u2029');

    // const text = String.fromCodePoint(0x20BB7);
    // for (const i of text) {
    //   console.log(i);
    // }
    // for (let i = 0; i < text.length; i++){
    //   console.log(text[i]);
    // }
    // const arr = [
    //   {id: 1, name: 'a'},
    //   {id: 2, name: 'b'},
    //   {id: 3, name: 'c'},
    // ];
    // for (const {id, name} of arr) {
    //   console.log(`${id} is ${name}`);
    // }
    // arr.forEach(({id, name}) => {
    //   console.log(`${id} is ${name}`);
    // });
    // const {toString: s} = 123;
    // console.log(s);
    // console.log(s === Number.prototype.toString); // true
    // const obj = {};
    // const arr = [];
    //
    // ({foo: obj['prop'], bar: arr[0]} = {foo: 123, bar: true});
    // console.log(obj);
    // console.log(arr);

    // this.demoStack.push('demo1');
    // this.demoStack.push('demo2');
    // this.demoStack.push('demo3');
    // this.demoStack.push('demo4');
    // console.log(this.demoStack.peek());
    // const popItem = this.demoStack.pop();
    // console.log(popItem);
    // console.log(this.demoStack.peek());
    // console.log(this.demoStack.length());
    // this.demoStack.clear();
    // console.log(this.demoStack.peek());
    // console.log(this.demoStack.length());
    // console.log('hello is Palindrome ' + this.testIsPalindrome('hello'));
    // console.log('helleh is Palindrome ' + this.testIsPalindrome('helleh'));
    // console.log(this.isValid('()'));
    // console.log(this.isValid('(]'));
    // console.log(this.isValid('('));
    // console.log(this.reverse(1534236469));
    // console.log(this.reverse(12));
    // console.log(this.lengthOfLastWord('hello world'));

  }

  // 测试字符串时候是回文
  public testIsPalindrome(str: string): boolean {
    // const strStack = new StackService();
    // for (const i of str) {
    //   strStack.push(i);
    // }
    // let palindromeStr = '';
    // for (let i = strStack.length(); i > 0; i--) {
    //   palindromeStr += strStack.pop();
    // }
    // return str === palindromeStr;
    const xArrLen = str.length;
    for (let i = 0; i <= (xArrLen - xArrLen % 2 !== 0 ? 1 : 0) / 2; i++) {
      if (str[i] !== str[xArrLen - i - 1]) {
        return false;
      }
    }
    return true;
  }

  public isValid(s) {
    const stack = new StackService();
    if (s.length > 1) {
      for (const i of s) {
        if (i === '(' || i === '[' || i === '{') {
          stack.push(i);
        } else if (i === ')' && stack.peek() === '(') {
          stack.pop();
        } else if (i === ']' && stack.peek() === '[') {
          stack.pop();
        } else if (i === '}' && stack.peek() === '{') {
          stack.pop();
        } else {
          stack.push(i);
        }
      }
      return stack.length() === 0;
    } else {
      return s === '';
    }
  }

  reverse(x) {
    // const xs = Math.abs(x);
    // let xr = '';
    // const stack = new Stack();
    // for (const i of xs.toString()) {
    //   stack.push(i);
    // }
    // for (const i of xs.toString()) {
    //   xr += stack.pop();
    // }
    // if (xs <= Math.pow(2, 31)) {
    //   return x > 0 ? Number(xr) : Number('-' + xr);
    // } else {
    //   return 0;
    // }
    const xs = Math.abs(x).toString().split('');
    let xr = '';
    for (let i = xs.length - 1; i >= 0; i--) {
      xr += xs[i];
    }
    console.log(xr);
    if (Number(xr) < Math.pow(2, 31)) {
      return x > 0 ? Number(xr) : Number('-' + xr);
    } else {
      return 0;
    }
  }

  lengthOfLastWord(s) {
    let index = 0;
    for (const i of s) {
      console.log(i);
      if (i !== '') {
        index += 1;
      } else {
        return index;
      }
    }
    return index;
  }

}
