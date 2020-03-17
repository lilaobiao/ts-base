import * as ts from 'typescript'
import transformer from './src/transformer'

function compile(sourceCode: string) {

  const source = ts.createSourceFile(
    '',
    sourceCode,
    ts.ScriptTarget.ES2016,
    true
  )

  const result = ts.transform(source, [transformer])

  const transformedSourceFile = result.transformed[0]
  const printer = ts.createPrinter()
  const resultCode = printer.printFile(transformedSourceFile)

  return resultCode
}

// 先安装依赖，然后执行 tsc runner.ts 编译，得到 runner.js，再执行 node runner.js 便可看见效果
// https://zhuanlan.zhihu.com/p/30360931

// import Button from "antd/lib/button";
console.log(
  compile('import { Button } from "antd"')
)
