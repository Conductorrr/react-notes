import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
/* 
  Context：多层嵌套的组件，可以使用Context实现组件通讯
*/

// 创建context得到两个组件（提供数据，消费数据）
const { Provider, Consumer } = React.createContext()

class App extends React.Component {
  render() {
    return (
      // 使用Provider组件作为父节点。value属性表示要传递的数据
      <Provider value="pink">
        <div className="app">
          <Node />
        </div>
      </Provider>
    )
  }
}

const Node = props => {
  return (
    <div className="node">
      <SubNode />
    </div>
  )
}

const SubNode = props => {
  return (
    <div className="subnode">
      <Child />
    </div>
  )
}

const Child = props => {
  return (
    <div className="child">
      {/* 使用Consumer组件来消费数据 */}
      <Consumer>{data => <span>我是子节点 -- {data}</span>}</Consumer>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
