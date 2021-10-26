import React from 'react'
import ReactDOM from 'react-dom'

/* 
  setState() 异步更新数据
  注意：使用该语法时，后面的setState()不要依赖于前面的setState()
  多次调用setState()，只会触发一次重新渲染 render（出于性能的考虑）
*/

class App extends React.Component {
  state = {
    count: 1
  }

  handleClick = () => {
    // 异步更新数据的！！！
    this.setState({
      count: this.state.count + 1
    })
    console.log('count：', this.state.count) // 1
    this.setState({
      count: this.state.count + 1 // 1 + 1
    })
    console.log('count：', this.state.count) // 1

    // 因为异步，所以，虽然这里调用了2次，但页面上还是显示的2
  }

  render() {
    console.log('render')
    return (
      <div>
        <h1>计数器：{this.state.count}</h1>
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
