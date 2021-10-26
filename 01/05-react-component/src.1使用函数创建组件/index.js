import React from 'react'
import ReactDOM from 'react-dom'

/* 
  函数组件：使用JS中的函数创建的组件叫做 函数组件
  函数组件必须有返回值
  组件名称必须以大写字母开头，React以此区分 组件 和 普通React元素
  使用函数名作为组件标签名
*/

// function Hello() {
//   return (
//     <div>这是我的第一个函数组件</div>
//   )
// }

// 返回值为null，表示不渲染任何内容
// function Hello() {
//   return null
// }

// 使用箭头函数创建组件：
const Hello = () => <div>这是我的第一个函数组件</div>

// 渲染组件
ReactDOM.render(<Hello />, document.getElementById('root'))