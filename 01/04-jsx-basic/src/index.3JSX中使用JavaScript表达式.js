import React from 'react'
import ReactDOM from 'react-dom'

/* 
  JSX中使用JavaScript表达式：使用 单 花括号（与Vue双花括号不同）
*/
const name = 'Jack'
const age = 19

const title = (
  <h1>
    Hello JSX, {name}, 年龄：{age}
  </h1>
)

// 渲染react元素
ReactDOM.render(title, document.getElementById('root'))