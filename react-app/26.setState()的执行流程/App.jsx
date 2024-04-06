import React, { useState } from 'react'
import B from './B'

const App = () => {

    console.log('App组件重新渲染了')

    const [count, setCount] = useState(0)

    /**
     * Too many re-renders
     *      - 当我们直接在函数体中调用setState时，就会触发上述错误
     *      - 问题：
     *          不是说过，如果新的state与旧的state值相同的情况下,它是不会触发组件的重新渲染
     *      - setState()执行流程：(函数组件)
     *          setCount() -> dispatchSetDate()
     *                          -> 会先判断,当前组件处于什么阶段
     *                          如果是渲染阶段   --> 不会检查state值是否相同
     *                          如果不是渲染阶段 -->  会检查state值是否相同
     *                              - 如果值不相同，则会对组件进行重新渲染
     *                              - 如果值相同，则不会对组件进行重新渲染
     *                                  如果只相同，React在一些情况下会继续执行当前组件的渲染
     *                                      但是这个渲染不会触发其子组件的渲染，这个词渲染不会产生实际的效果
     *                                      这种情况发生在值第一次相同时
     */

    // setCount(0)

    /**
     * count 0
     *    第一次点击按钮 count --> 1
     *      'App组件重新渲染了' 执行了
     *    第二次点击按钮 count --> 1
     *      'App组件重新渲染了' 执行了
     *    第三次点击按钮 count --> 1
     *      'App组件重新渲染了' 没执行
     */
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