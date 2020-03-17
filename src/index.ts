declare const BigInt: any

function greeter(person: string) {
  return 'Hello, ' + person
}

const user = '李贵兴'

const decLiteral: number = 6
const hexLiteral: number = 0xf00d
const binaryLiteral: number = 0b1010
const octalLiteral: number = 0o744

const sym1: symbol = Symbol('key1');
const sym2 = Symbol('key2');

// const max: bigint = Bigint(Number.MAX_SAFE_INTEGER);
const max: bigint = BigInt(Number.MAX_SAFE_INTEGER);
console.log(max)

declare let bar: bigint

function warnUser(): void {
  alert("This is my warning message");
}

function warn(): null{
  return null
}

const list: Array<number> = []
list.push(1)
list.push(0)

let u: undefined = undefined;
let n: null = null;


enum Direction {
  Up = 10,
  Down,
  Left,
  Right
}

console.log(Direction.Up === 0); // true
console.log(Direction.Down === 1); // true
console.log(Direction.Left === 2); // true
console.log(Direction.Right === 3); // true


enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

function isSummer(month: Month) {
  switch (month) {
    case Month.June:
    case Month.July:
    case Month.August:
      return true;
    default:
      return false
  }
}

console.log(isSummer(Month.January))

interface User {
  name: string
  age?: number
  readonly isMale: boolean
}

const changeUser = function(user: User): User{
  user.age = 12
  return user
}

// 直接声明参数与返回类型
const addsum:(a:number, b:number) => number = (a, b) => a + b
console.log('addsum',addsum(1,2))
// 可选参数
const add1 = (a: number, b?: number) => a + (b ? b : 0)
console.log('add1',add1(1,2))
// 默认参数
const add2 = (a: number, b:number = 10) => a + b
console.log('add1',add2(1))
// 剩余参数
const add3 = (a: number, ...rest: number[]) => rest.reduce(((a, b) => a + b), a)
console.log('add3',add3(1,2,3,4,5,6))


// 用接口定义函数
interface ISearchFunc {
  (source : string, substring : string):boolean;
};
let searchfunc : ISearchFunc;
searchfunc = function (source : string, substring : string) {
  return source.search(substring) != -1;
};

let searchfunc2: ISearchFunc = function (source, substring) {
  return source.search(substring) != -1;
};
console.log(searchfunc("2334455",'45'));
console.log(searchfunc2("2334455",'45'));


// 可选参数后面不允许再出现必须参数了
// 默认参数：默认值的参数识别为可选参数
// ...rest 的方式获取函数中的剩余参数 字符串数组
function buildName( firstName:string, lastName?:string, age : number = 10,...items:string[]) {
  console.log(items);
  if(lastName){
    return firstName + '加上' + lastName + '数字' + age.toString();
  }else {
    return firstName + age.toString();
  }
}
console.log((buildName("tom","455",23,'5',"45","法国队和规范")));


abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log('roaming the earch...');
  }
}
class Cat extends Animal {
  makeSound() {
    console.log('miao miao')
  }
}
const cat = new Cat()
cat.makeSound() // miao miao
cat.move() // roaming the earch...
