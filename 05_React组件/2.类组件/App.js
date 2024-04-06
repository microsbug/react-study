import React from 'react'

/* 
    类组件必须继承React.Component
*/
class App extends React.Component {
  /* 类组件中必须添加一个render方法，返回一个jsx对象 */

  render() {
    return <div>我是一个类组件</div>
  }
}

// 导出App组件
export default App
