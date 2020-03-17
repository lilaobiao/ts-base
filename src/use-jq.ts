// ts 使用技巧
function add(a: number, b: number) {
  return a + b
}
type AddFn = typeof add // (a: number, b: number) => number
type ReturnAddFn = ReturnType<AddFn> // number
type ReturnAddFn1 = ReturnType<typeof add> // number
 // 巧用元组
function query(...args:[string, number, boolean]){
  const d: string = args[0];
  const n: number = args[1];
  const b: boolean = args[2];
  console.log(d,n,b)
}
// 巧用Omit
// 有时候我们需要复用一个类型，但是又不需要此类型内的全部属性，因此需要剔除某些属性，这个时候 Omit 就派上用场了。
interface UserOmit {
  username: string
  id: number
  token: string
  avatar: string
  role: string
}
type UserWithoutToken = Omit<UserOmit, 'token'> // 去掉了属性token

// Record 允许从 Union 类型中创建新类型，Union 类型中的值用作新类型的属性。
// 举个简单的例子，比如我们要实现一个简单的汽车品牌年龄表，一下写法貌似没有问题。
type Car = 'Audi' | 'BMW' | 'MercedesBenz'
const cars = {
  Audi: { age: 119 },
  BMW: { age: 113 },
  MercedesBenz: { age: 133 }
}
// 虽然这个写法没问题，但是有没有考虑过类型安全的问题？
// 我们忘记写了一个汽车品牌，他会报错吗？
// 我们拼写属性名错误了，它会报错吗？
// 我们添加了一个非上述三个品牌的品牌进去，他会报错吗？
// 我们更改了其中一个品牌的名字，他会有报错提醒吗？
// 上述这种写法统统不会，这就需要 Record 的帮助。
type CarRecord = Record<Car, {age: number}>
const carRecord: CarRecord = {
  Audi: { age: 119 },
  BMW: { age: 113 },
  MercedesBenz: { age: 133 }
}

// 巧用类型约束
// 在 .tsx 文件里，泛型可能会被当做 jsx 标签
const toArray1 = <T>(element: T) => [element]; // Error in .tsx file.
// 加 extends 可破
const toArray2 = <T extends {}>(element: T) => [element]; // No errors.
