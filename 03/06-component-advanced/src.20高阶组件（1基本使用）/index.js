import React from 'react'
import ReactDOM from 'react-dom'

/* 
  高阶组件：组件复用
*/

import img from './images/cat.png'

// 创建高阶组件（虽然叫组件，但是个函数，约定名称以with开头）
// 指定函数参数，作为要渲染的组件（参数应该以大写字母开头）
function withMouse(WrappedComponent) {
  // 创建类组件，提供复用的状态逻辑
  class Mouse extends React.Component {
    state = {
      x: 0,
      y: 0
    }

    handleMouseMove = e => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      })
    }

    componentDidMount() {
      window.addEventListener('mousemove', this.handleMouseMove)
    }

    componentWillUnmount() {
      window.removeEventListener('mousemove', this.handleMouseMove)
    }

    render() {
      // 渲染参数组件，同时将状态通过props传递给参数组件
      return <WrappedComponent {...this.state} />
    }
  }

  return Mouse
}

// 鼠标当前位置的组件
const Position = props => (
  <p>
    鼠标当前位置：(x: {props.x}, y: {props.y})
  </p>
)

// 猫捉老鼠的组件：
const Cat = props => (
  <img
    src={img}
    alt=""
    style={{
      position: 'absolute',
      top: props.y - 64,
      left: props.x - 64
    }}
  />
)

// 获取增强后的组件：
const MousePosition = withMouse(Position)

// 调用高阶组件来增强猫捉老鼠的组件：
const MouseCat = withMouse(Cat)

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>高阶组件</h1>
        {/* 渲染增强后的组件 */}
        <MousePosition />
        <MouseCat />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
