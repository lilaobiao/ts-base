function isString(test: any): test is string{
  return typeof test === 'string';
}
function isString2(test: any): boolean{
  return typeof test === 'string';
}
// 传入的参数可能是 number 或 string
function example(foo: number | string){
  if(isString(foo)){
      console.log('it is a string' + foo);
      // 如果用 isString2 方法判断的 foo，编译器不知道 foo 是不是 string 类型，下面的代码会报错
      console.log(foo.length); // string function
  }
}
example('hello world');

// interface ToString {
//   (): string
// }
// declare const sometingToString: ToString;
// sometingToString()

// interface ToString {
//   new (): string
// }
// declare const sometingToString: ToString;
// new sometingToString()
