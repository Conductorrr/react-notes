import React from 'react'
import ReactDOM from 'react-dom'

/* 
  从JSX中抽离事件处理程序
*/

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }

    this.onIncrement = this.onIncrement.bind(this) // 利用bind将事件处理程序中的this与组件实例绑定到一起
  }

  // 事件处理程序
  onIncrement() {
    console.log('事件处理程序中的this：', this)
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <h1>计数器：{ this.state.count }</h1>
        <button onClick={this.onIncrement}>+1</button>
      </div>
    )
  }
}

// 渲染组件
ReactDOM.render(<App />,  document.getElementById('root'))