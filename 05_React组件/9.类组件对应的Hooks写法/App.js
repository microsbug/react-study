import './App.css'
import React from 'react'
import User from './components/User.js'

/* 
  WebStorm中的快捷方式:
    rsc -> 函数组件(不带props)
    rsi -> 函数组件(带props)
    rcc -> 2.类组件
*/
class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <User
                    name='张三'
                    age={18}
                    gender={'男'}
                />
            </div>
        )
    }
}

export default App
