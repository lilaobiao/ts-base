interface Action<T> {
  payload?: T
  type: string
}
class EffectModule {
  count = 1;
  message = "hello!";

  delay(input: Promise<number>) {
    return input.then(i => ({
        payload: `hello ${i}!`,
        type: 'delay'
      })
    )
  }

  setMessage(action: Action<Date>) {
    return {
      payload: action.payload!.getMilliseconds(),
      type: "set-message"
    };
  }
}

// 现在有一个叫 connect 的函数，它接受 EffectModule 实例，将它变成另一个对象，
// 这个对象上只有EffectModule 的同名方法，但是方法的类型签名被改变了:
// asyncMethod<T, U>(input: Promise<T>): Promise<Action<U>>  变成了
// asyncMethod<T, U>(input: T): Action<U>
// syncMethod<T, U>(action: Action<T>): Action<U>  变成了
// syncMethod<T, U>(action: T): Action<U>

// 取出一个类型的所有方法名
type methodsPick<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T]
type EffectModuleMethods = methodsPick<EffectModule>


type asyncMethod<T, U> = (input: Promise<T>) => Promise<Action<U>> // 转换前
type asyncMethodConnect<T, U> = (input: T) => Action<U> // 转换后
type syncMethod<T, U> = (action: Action<T>) => Action<U> // 转换前
type syncMethodConnect<T, U> = (action: T) => Action<U> // 转换后

type EffectModuleMethodsConnect<T> = T extends asyncMethod<infer U, infer V>
  ? asyncMethodConnect<U, V>
  : T extends syncMethod<infer U, infer V>
  ? syncMethodConnect<U, V>
  : never

// 这是本题目的关键部分,我们简略分析一下:
//   EffectModuleMethodsConnect<T> 中泛型 T 接受的是 EffectModule 的方法类型
//   接下来进行一个判断,如果是可分配给 asyncMethod<infer U, infer V> 的话,说明是异步方法,那么把它转化为 asyncMethodConnect<U, V>
//   如果可分配给 syncMethod<infer U, infer V> 那么是同步方法,转化为 syncMethodConnect<U, V>
//   上面的条件全部不符,那么就返回 never
