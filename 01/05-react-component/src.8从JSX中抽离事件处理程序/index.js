import React from 'react'
import ReactDOM from 'react-dom'

/* 
  从JSX中抽离事件处理程序
*/

class App extends React.Component {
  state = {
    count: 0
  }

  // 事件处理程序
  onIncrement() {
    console.log('事件处理程序中的this：', this) // undefined
    this.setState({ // 报错，Cannot read property setState of undefined
      count: this.state.count + 1
    })
  }

  /*
    为什么会undefined？
    类中的方法中的this是指向实例的，但在 React Component 中将处理程序作为 callback 参数传递后，
    (相当于做了
    var app = new App()
    var display = app.onIncrement
    dispaly() // TypeError: this is undefined
    这么一个操作)
    丢失了上下文，导致 this 值变成 undefined。
    (由于是在严格模式下，所以this是undefined而不是windows)
    通常情况下，如果你没有在方法后面添加 () ，例如 onClick={this.onIncrement}，你应该为这个方法绑定 this。
  */

  render() {
    return (
      <div>
        <h1>计数器：{ this.state.count }</h1>
        <button onClick={this.onIncrement}>+1</button>
        {/* <button onClick={() => {
          this.setState({
            count: this.state.count + 1
          })
        }}>+1</button> */}
      </div>
    )
  }
}

// 渲染组件
ReactDOM.render(<App />,  document.getElementById('root'))