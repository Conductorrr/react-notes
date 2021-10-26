import React from 'react'
import ReactDOM from 'react-dom'

/* 
  props校验
*/

const App = props => {
  return (
    <div>
      <h1>props的默认值：{props.pageSize}</h1>
    </div>
  )
}

App.defaultProps = {
  pageSize: 10
}

ReactDOM.render(<App />, document.getElementById('root'))
