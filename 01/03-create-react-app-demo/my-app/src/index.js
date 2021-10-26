// 因为这个脚手架是基于webpack的，所以可以直接使用es6的模块语法import

// 1 导入react
import React from 'react'
import ReactDOM from 'react-dom'

// 2 创建react元素
const title = React.createElement('h1', null, 'Hello React 脚手架')

// 3 渲染react元素
ReactDOM.render(title, document.getElementById('root'))
