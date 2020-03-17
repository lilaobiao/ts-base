// 打印构造函数
function logClass(target: typeof Person) {
  console.log(target)
}
// 打印属性名
function logProperty(target: any, propertyKey: string) {
  console.log(propertyKey);
}
// 打印方法名
function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log(propertyKey);
}
// 打印参数位置
function logParameter(target: Object, propertyKey: string, index: number) {
  console.log(index);
}

@logClass
class Person {

  @logProperty
  public name: string;

  constructor(name : string) {
    this.name = name;
  }

  @logMethod
  public greet(@logParameter message : string) : string {
    return `${this.name} say: ${message}`;
  }
}
/* 创建类声明的时候就会执行各个装饰器
name
0
greet
[Function: Person]
*/





function zsqf() {
  console.log("f(): evaluated");
  return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("f(): called");
  }
}

function zsqg() {
  console.log("g(): evaluated");
  return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log("g(): called");
  }
}

class ZSQC {
  @zsqf()
  @zsqg()
  method() {
    console.log(0)
  }
}
// f(): evaluated
// g(): evaluated
// g(): called
// f(): called
// var testZSQC = new ZSQC()
// testZSQC.method() // 0
