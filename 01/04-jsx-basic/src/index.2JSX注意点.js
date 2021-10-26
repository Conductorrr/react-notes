import React from 'react'
import ReactDOM from 'react-dom'

/* 
  JSX注意点：
  1、属性名使用驼峰命名法
  2、特殊属性名：class -> className，for -> htmlFor，tabindex -> tabIndex等等
  3、没有子节点的react元素可以用/>结束
  4、推荐：使用小括号包裹JSX，避免JS中自动插入分号的陷阱
*/

const title = (
  <h1 className="title">
    Hello JSX 
    <span />
  </h1>
)

ReactDOM.render(title, document.getElementById('root'))