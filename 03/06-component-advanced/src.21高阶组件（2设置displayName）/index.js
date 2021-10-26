import React from 'react'
import ReactDOM from 'react-dom'

/* 
  使用高阶组件问题：得到两个名称相同的组件Mouse。原因：默认情况下，react使用组件名称作为displayName
  解决方式：为高阶组件设置displayName便于区分
*/

import img from './images/cat.png'

function withMouse(WrappedComponent) {
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
      return <WrappedComponent {...this.state} />
    }
  }

  // 设置displayName
  Mouse.displayName = `WithMouse${getDisplayName(WrappedComponent)}`

  return Mouse
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

const Position = props => (
  <p>
    鼠标当前位置：(x: {props.x}, y: {props.y})
  </p>
)

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

const MousePosition = withMouse(Position)

const MouseCat = withMouse(Cat)

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>高阶组件</h1>
        <MousePosition />
        <MouseCat />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
