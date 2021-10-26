import React from 'react'
import ReactDOM from 'react-dom'

/* 
  高阶组件
*/

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
      console.log('Mouse:', this.props)
      // 继续往下传就好了
      // 渲染WrappedComponent时，将state和this.props一起传递给组件
      return <WrappedComponent {...this.state} {...this.props} />
    }
  }

  Mouse.displayName = `WithMouse${getDisplayName(WrappedComponent)}`

  return Mouse
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

const Position = props => {
  console.log('Position:', props)
  return (
    <p>
      鼠标当前位置：(x: {props.x}, y: {props.y})
    </p>
  )
}

const MousePosition = withMouse(Position)

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>高阶组件</h1>
        {/* 添加的属性是添加给高阶组件Mouse，高阶组件也没有往下传递props */}
        <MousePosition a="1" />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
