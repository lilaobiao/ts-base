# TypeScript开发环境简易搭建

```js
// index.routes.js
export default {
  path:'/index',
  name:'index',
  component:() => import(/**/,'./views/index.vue')
}

// routers.js
Vue.use(Router)
const routerList = []
function importAll(r){
  console.log(r.keys())
  r.keys.forEach((key) => routerList.push(r(key).default))
}
importAll(require.context('.',true,/\.routes\.js/))

export default new Router({
  routers:[
    {},
    {},
    // 自动引入的部分
    ...routerList
  ]
})

// global.component.js
const changeStr = function(str){
  return str.charAt(0).toUpperCase() + str.slice(1)
}
// 注意目录路径
const requireCom = require.context('.',false,/\.vue$/)
requireCom.keys().forEach((fileName) => {
  const config = requireCom(fileName)
  const comName = changeStr(
    // .child.vue => child.vue
    fileName.replace(/^\.\//,'').replace(/\.\w+$/,'')
  )
  Vue.component(comName,config.default || config)
}
```
