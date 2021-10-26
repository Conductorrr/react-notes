import React from 'react'
import ReactDOM from 'react-dom'

/* 
  props
*/

// 2 接收数据
class Hello extends React.Component {
  render() {
    // props是一个对象
    return (
      <div>
        <h1>props: {this.props.age}</h1>
      </div>
    )
  }
}

// 1 传递数据
ReactDOM.render(<Hello name="rose" age={19} />, document.getElementById('root'))