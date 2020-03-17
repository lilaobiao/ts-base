import * as ts from "typescript";

// 引入目标文件
const filePath = "./test-transform.ts";

// 创建一个 program 实例
const program = ts.createProgram([filePath], {});

// 为我们的 program 做一个类型检查器
const checker = program.getTypeChecker();

// 获取 test-transform.ts 源代码的AST
const source = program.getSourceFile(filePath);

// 创建 printer实例为我们打印最后的ast
const printer = ts.createPrinter();

// 我们提供给定类型的节点字符串的小助手
const syntaxToKind = (kind: ts.Node["kind"]) => {
  return ts.SyntaxKind[kind];
};
// 从根节点开始遍历并打印
ts.forEachChild(source!, node => {
  console.log(syntaxToKind(node.kind));
});

// 执行命令
// tsc transform.ts
// node transform.js
// 得到的结果如下

// VariableStatement
// VariableStatement
// FunctionDeclaration
// EndOfFileToken


// 我们看到通过遍历我们获得了AST上的节点,首先是两个变量声明(VariableStatement):
// const a = 1
// const b = 2
// 接着是一个函数声明(FunctionDeclaration):
// function add(x: number, y: number): number {
//   return x + y
// }
// 最后的EndOfFileToken相当于结束标志.
