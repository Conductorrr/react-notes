import React from 'react'
import ReactDOM from 'react-dom'

/* 
  props
*/

class Hello extends React.Component {
  // 使用类组件时，如果写了构造函数，应该将props传递给super，否则无法在构造函数中获取到props。（这一点和render中使用props无关）
  constructor(props) {
    super(props)

    console.log(props)
  }

  render() {
    console.log('render：', this.props)

    return (
      <div>
        <h1>props：</h1>
      </div>
    )
  }
}
/* 
const Hello = props => {
  console.log('props：', props)
  props.fn()

  // 修改props的值：错误演示！！！
  // props.name = 'tom'

  return (
    <div>
      <h1>props：</h1>
      {props.tag}
    </div>
  )
}
 */
ReactDOM.render(
  <Hello
    name="rose" // string
    age={19} // number
    colors={['red', 'green', 'blue']}
    fn={() => console.log('这是一个函数')}
    tag={<p>这是一个p标签</p>}
  />,
  document.getElementById('root')
)
