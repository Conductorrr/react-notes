import React from 'react'
import ReactDOM from 'react-dom'

/* 
  默认路由：一进来就能看到Home组件的内容了（之前时点击之后才跳转）
*/

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Home = () => <p>进入页面的时候，你能看到我吗？</p>

const App = () => (
  <Router>
    <div>
      <h1>默认路由</h1>

      {/* 默认路由 */}
      <Route path="/" component={Home} />
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
