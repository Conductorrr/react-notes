import React from 'react'
import ReactDOM from 'react-dom'

/* 
  render props 模式：组件复用
*/

// 创建Mouse组件
class Mouse extends React.Component {
  // 鼠标位置state
  state = {
    x: 0,
    y: 0
  }

  // 鼠标移动事件的事件处理程序
  handleMouseMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  // 监听鼠标移动事件
  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove)
  }

  render() {
    // return null
    return this.props.render(this.state)
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>render props 模式</h1>
        <Mouse
          render={mouse => {
            return (
              <p>
                鼠标位置：{mouse.x} {mouse.y}
              </p>
            )
          }}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

/* 
  Mouse这个组件实现了状态逻辑代码的复用（1状态2操作状态的方法），但没有实现UI结构的复用。
  复用的组件并没有渲染内容，内容是在使用这个组件的时候再来指定的。
  通过render函数的参数，拿到复用组件内部的状态；通过render函数的返回值，来指定渲染的内容。
*/