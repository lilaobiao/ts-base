
interface User1 {
  id: number
  name: string
  form?: string
}

type Foo1 = () => User1

type Ruser = ReturnType<Foo1> // User

const ruser:Ruser = {
  id: 0,
  name: ''
}

// infer 是工具类型和底层库中非常常用的关键字,
// 表示在 extends 条件语句中待推断的类型变量,相对而言也比较难理解

// 下面例子表示,如果 T 能赋值给 (param: infer P) => any，则结果是(param: infer P) => any类型中的参数 P，
// 否则返回为 T,infer P表示待推断的函数参数.
type ParamType<T> = T extends (param: infer P) => any ? P : T;


// type ReturnType<T> = T extends (...args: any[]) => infer P ? P : any;

// 其实TypeScript也内置了一个获取构造函数参数的工具类型:
// ConstructorParameters<T> -- 提取构造函数中参数类型
class TestClass {
  constructor(public name: string, public age: number) {}
}
type Rcp = ConstructorParameters<typeof TestClass> // [string, number]


// 我们一步步分析一下这个工具类型:
// new (...args: any[]指构造函数,因为构造函数是可以被实例化的.
// infer P代表待推断的构造函数参数,如果接受的类型T是一个构造函数,那么返回构造函数的参数类型P,否则什么也不返回,即never类型
type ConstructorParameters2<T extends new (...args: any[]) => any> = T extends new (...args: infer P) => any
  ? P
  : never;

// infer非常强大,由于它的存在我们可以做出非常多的骚操作.
// 1、tuple转union,比如[string, number] -> string | number:

// 下面的例子可以理解为：给ElementOf传递一个泛型(infer表示在 extends 条件语句中待推断的类型变量)，
// 如果泛型是个数组，就返回数组的类型定义，否则返回never+
type ElementOf<T> = T extends Array<infer E> ? E : never;
type TTuple = [string, number];
type ToUnion = ElementOf<TTuple>; // string | number

// 超多一个类型的或，就是any
type testUnion = string | number
type testUnion2 = testUnion extends any ? string : number // string
type testUnion3 = ((k: string) => string) extends ((k: string) => string) ? string : never // string
// 2、union 转 intersection，如：string | number -> string & number
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;
type Result = UnionToIntersection<string | number>; // never
type testSN =  string & number // never


type UnionToIntersection2<U> = U extends any ? (k: U) => void : never
type Result2 = UnionToIntersection2<string | number> // ((k: string) => void) | ((k: number) => void)
type Result3 = Result2 extends ((k: string) => void) ? string : never; // never
type Result4 = ((k: string) => void) extends Result2 ? string : never; // string
type Result5 = Result2 extends ((k: infer I) => void) ? I : never;


type UnionToIntersection3<U> = U extends any ? (k: U) => U : never
type Result32 = UnionToIntersection3<string | number> // ((k: string) => string) | ((k: number) => number)
type Result33<U> = Result32 extends ((k: infer U) => U) ? U : never
type Result34 = Result33<testUnion> // never
