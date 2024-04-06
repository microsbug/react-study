import React, { useState, useEffect } from 'react'
import B from './B'

const App = () => {

    console.log('组件App渲染！')

    const [count, setCount] = useState(0)

    /*setTimeout(() => {
        setCount(1)
    }, 0)*/

    /**
     * useEffect()是一个钩子函数，需要一个函数作为参数
     *   - 这个作为参数的函数，将会在组件渲染完毕后执行
     * 在开发中，可以将那些会产生副作用的代码编写到useEffect()回调函数中
     *   - 这样可以避免影响到组件的重新渲染！
     */
    useEffect(() => {
        setCount(1)
    })

    const clickHandler = () => {
        console.log('点击按钮！')
        setCount(1)
    }

    return (
        <div>
            {count}

            <B />

            <button onClick={clickHandler}>点我一下</button>
        </div>
    )
}

export default App