// 重载
interface DirectionObj {
  top: number
  right: number
  bottom: number
  left: number
}

// 函数重载
function assigned(all: number): DirectionObj
function assigned(topAndBottom: number, leftAndRight: number): DirectionObj
function assigned(top: number, right: number, bottom: number, left: number): DirectionObj

// 代码实现函数不可被调用
function assigned (a: number, b?: number, c?: number, d?: any) {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a
  } else if (c === undefined && d === undefined) {
    c = a
    d = b
  }
  return {
    top: a,
    right: b,
    bottom: c,
    left: d
  }
}


assigned(1)
assigned(1,2)
// assigned(1,2,3)
assigned(1,2,3,4)
