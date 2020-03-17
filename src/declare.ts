// 关键字 declare 表示声明的意思,我们可以用它来做出各种声明:
// declare var 声明全局变量
// declare function 声明全局方法
// declare class 声明全局类
// declare enum 声明全局枚举类型
// declare namespace 声明（含有子属性的）全局对象
// interface 和 type 声明全局类型

declare const jQuery: (selector: string) => any;
declare function $(selector: string): any;
declare class PersonHH {
  name: string;
  constructor(name: string);
  say(): string;
}

declare enum Directions {
  Up,
  Down,
  Left,
  Right
}


// declare namespace，命名空间虽然在日常开发中已经不常见了，但是在 d.ts 文件编写时还是很常见的，
// 它用来表示全局变量是一个对象，包含很多子属性。
// 比如 axios 是全局对象，而其包含一个 axios.post 用于处理 ajax 请求，这个时候命名空间就派上用场了:
declare namespace axios {
    function post(url: string, settings?: any): void;
}

interface AjaxSettings {
  method?: 'GET' | 'POST'
  data?: any;
}
declare namespace axios { // 会合并
  function ajax(url: string, settings?: AjaxSettings): void;
}

// 声明合并
// 假如 jQuery 既是一个函数，可以直接被调用 jQuery('#foo')，又是一个对象，拥有子属性 jQuery.ajax()（事实确实如此），
// 那么我们可以组合多个声明语句，它们会不冲突的合并起来:
// declare function jQuery(selector: string): any;
// declare namespace jQuery {
//     function ajax(url: string, settings?: any): void;
// }
