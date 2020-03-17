interface Obj {
  [key: string]: any
}


// ReadOnly
// type Readonly<T> = {
//   readonly [P in keyof T]: T[P];
// }
// Partial
// type Partial<T> = {
//   [P in keyof T]?: T[P];
// }
// 用 in， keyof即可实现
// type Pick<T, K extends keyof T> = {
//   [P in K]: T[P];
// }
// type Record<K extends string, T> = {
//   [P in K]: T;
// }

// 这样似乎没什么问题，但是如果你够细心的话，还是会发现我们的类型定义不够严谨：
// 参数 names 的成员应该是参数 o 的属性，因此不应该是 string 这种宽泛的定义，应该更加准确
// 我们 pick 函数的返回值类型为 any[]，其实可以更加精准，pick 的返回值类型应该是所取的属性值类型的联合类型
function pick(o: Obj, names: string[]) {
  return names.map(n => o[n]);
}

class Images {
  public src: string = 'https://www.google.com.hk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
  public alt: string = '谷歌'
  public width: number = 500
}
// keyof，索引类型查询操作符，即索引类型查询操作符，我们可以用 keyof 作用于泛型 T 上来获取泛型 T 上的所有 public 属性名构成联合类型。
type propsNames = keyof Images
// 索引访问操作符，我们可以通过 keyof 查询索引类型的属性名，那么如何获取属性名对应的属性值类型呢？即 T[K]
type propsType = Images[propsNames]

function pick2<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(n => o[n]);
}
// const res = pick(user, ['token', 'id', ])




// 我们有一个Images接口，现在有一个需求是把Images接口中的成员全部变成可选的，我们应该怎么做？
// 难道要重新一个个:前面加上?,有没有更便捷的方法？
// 这个时候映射类型就派上用场了，映射类型的语法是[K in Keys]:
// K：类型变量，依次绑定到每个属性上，对应每个属性名的类型
// Keys：字符串字面量构成的联合类型，表示一组属性名（的类型）
type partial<T> = { [K in keyof T]?: T[K] }
type partialUser = partial<Images>


// 条件类型
// T extends U ? X : Y
// 上面的代码可以理解为: 若 T 能够赋值给 U，那么类型是 X，否则为 Y,有点类似于JavaScript中的三元条件运算符.
declare function ffffff<T extends boolean>(x: T): T extends true ? string : number;
// declare function ffffff<T extends boolean>(x: T): T ? string : number; // 错误
const x = ffffff(Math.random() < 0.5)
const y = ffffff(false)
const z = ffffff(true)



// 裸类型参数,没有被任何其他类型包裹即T
// type NakedUsage<T> = T extends string ? string : "NO"
// type NumberNakedUsage = NakedUsage<number>
// let ooo:NumberNakedUsage = "NO"
// 类型参数被包裹的在元组内即[T]
// type WrappedUsage<T> = [T] extends [boolean] ? "YES" : "NO";


// 分布式有条件类型在实例化时会自动分发成联合类型
// type NakedUsage<T> = T extends boolean ? "YES" : "NO"
// 当我们给类型NakedUsage加入联合类型number | boolean时,它的结果返回"NO" | "YES",
// 相当于联合类型中的number和boolean分别赋予了NakedUsage<T>然后再返回出一个联合类型
// type Distributed = NakedUsage<number | boolean> //  = NakedUsage<number> | NakedUsage<boolean> =  "NO" | "YES"
// let aaa:Distributed = "YES"
// let bbb:Distributed = "NO"
// 我们看NotDistributed的结果,他接受的同样是联合类型number | boolean,
// 但是返回一个特定的类型"NO",而非一个联合类型,就是因为他的类型参数是被包裹的即[<T>],不会产生分布式有条件类型的特性.
// type WrappedUsage<T> = [T] extends [boolean] ? "YES" : "NO";
// type NotDistributed = WrappedUsage<number | boolean > // "NO"


// 我们先思考一下,如何设计一个类型工具Diff<T, U>,我们要找出T类型中U不包含的部分
type Diff<T, U> = T extends U ? never : T;
type R = Diff<"a" | "b" | "c" | "d", "a" | "c" | "f"> // R = "b" | "d"
type Filter<T, U> = T extends U ? T : never;
type R1 = Filter<string | number | (() => void), Function>;
// 剔除 null和undefined
type NotNullable<T> = Diff<T, null | undefined>;
type R2 = NotNullable<string | number | undefined>;  // string | number



// 条件类型与映射类型
// 我们有一个interface Part,现在需要编写一个工具类型将 interface 中值为函数类型的 key 取出来，如何实现
interface Part {
  id: number;
  name: string;
  subparts: Part[];
  updatePart(newName: string): void;
}
type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T]
// [K in keyof T]相当于遍历整个interface，同时[K in keyof T]又是对象所有的键
// T[K] extends Function ? K : never，对于 Part 的每一个属性值，如果是function类型，保持不变，否则 never剔除
// { [K in keyof T]: T[K] extends Function ? K : never } 对象得到的结果就是 { updatePart(newName: string): void; }
// 再通过 [keyof T] 遍历 { updatePart(newName: string): void; }，拿到的自然就是 updatePart
type PartFn = FunctionPropertyNames<Part>; // "updatePart"

// 如何取出下面interface中的可选类型?
interface People {
  id: number;
  name: string;
  age?: number;
  from?: string;
}
// 取出上面interface中的可选类型
type NullableKeys<T> = {
  [K in keyof T]: undefined extends T[K] ? K : never;
}[keyof T];
type RRRR = NullableKeys<People>
type SSSS = Diff<RRRR, undefined>;

// 取出上面interface中的必选类型
type NullableKeys1<T> = {
  [K in keyof T]: undefined extends T[K] ? never : K;
}[keyof T];
type RRRR1 = NullableKeys1<People>
type SSSS1 = Diff<RRRR1, undefined>;
