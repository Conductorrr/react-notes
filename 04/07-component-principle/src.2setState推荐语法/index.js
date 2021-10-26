import React from 'react'
import ReactDOM from 'react-dom'

/* 
  setState() 推荐语法
*/

class App extends React.Component {
  state = {
    count: 1
  }

  handleClick = () => {
    // 推荐语法：
    // 这种语法也是异步更新state的！
    // 但是回掉函数的参数state表示最新的state！
    this.setState((state, props) => {
      return {
        count: state.count + 1 // 1 + 1
      }
    })
    this.setState((state, props) => {
      console.log('第二次调用：', state) // 2  (后打印这个，因为异步)
      return {
        count: state.count + 1 // 2 + 1
      }
    })
    // 页面从1变成3

    // 因为异步更新，所以还是1
    console.log('count：', this.state.count) // 1  (先打印这个)
  }

  render() {
    return (
      <div>
        <h1>计数器：{this.state.count}</h1>
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
