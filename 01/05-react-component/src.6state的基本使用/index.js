import React from 'react'
import ReactDOM from 'react-dom'

/* 

  函数组件又叫无状态组件，没有自己的状态，只负责数据的展示
  类组件又叫有状态组件，有自己的状态，负责UI更新，让页面动起来

  state的基本使用
  状态即数据
  状态是私有的，只能在组件内部使用
  通过this.state来获取状态
*/

class App extends React.Component {
  /* constructor() {
    super()

    // 初始化state
    this.state = {
      count: 0
    }
  } */

  // 简化语法 初始化state（推荐）
  state = {
    count: 10
  }

  render() {
    return (
      <div>
        <h1>计数器：{ this.state.count }</h1>
      </div>
    )
  }
}

// 渲染组件
ReactDOM.render(<App />,  document.getElementById('root'))