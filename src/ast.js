const a = 3 + 4;
console.log(a);

// 上面代码生成的ast tree 如下
const astTree = {
  "type": "Program", // 程序
  "body": [
    {
      "type": "VariableDeclaration", // 变量声明
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator", // 变量声明符
          "id": {
            "type": "Identifier", // 标识符
            "name": "a"
          },
          "init": {
            "type": "BinaryExpression", // 二元表达式
            "operator": "+", // 操作符
            "left": {
              "type": "Literal", // 字面量
              "value": 3,
            },
            "right": {
              "type": "Literal",
              "value": 4,
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement", // 陈述表达
      "expression": {
        "type": "CallExpression", // 调用表达式
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": { // 对象
            "type": "Identifier", // 标识符
            "name": "console"
          },
          "property": { // 属性
            "type": "Identifier",
            "name": "log"
          }
        },
        "arguments": [ // 参数
          {
            "type": "Identifier",
            "name": "a"
          }
        ]
      }
    }
  ]
}
