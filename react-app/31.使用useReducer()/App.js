import React, { useReducer, useState } from 'react'

// 为了避免reducer会重复创建，通常reducers会定义在组件的外部
const countReducer = (/*...args*/ prevState, action) => {
    console.log('reducer执行了！', /*args*/ prevState, action)
    // 根据action的type来判断执行什么操作
    // if (action.type === 'ADD') {
    //     return prevState + 1
    // } else if (action.type === 'SUB') {
    //     return prevState - 1
    // }
    // return prevState
    switch (action.type) {
        case 'ADD':
            return prevState + 1
        case 'SUB':
            return prevState - 1
        default:
            return prevState
    }
}

const App = () => {

    // const [count, setCount] = useState(1)

    // const addHandler = () => {
    //     setCount(prevState => prevState + 1)
    // }

    // const subHandler = () => {
    //     setCount(prevState => prevState - 1)
    // }

    // useReducer(reducer, initialArg, init)
    /**
     *  参数：
     *      1.reducer : 整合函数
     *          对于我们当前state的所有操作都应该在函数中定义
     *          该函数的返回值，会成为state的新值
     *          reducer函数接收两个参数：
     *              1.第一个参数：当前最新的state
     *              2.第二个参数：action, 需要一个对象
     *                  在对象中会存储dispatch派发的命令
     *      2.initialArg : state的初始值,作用和useState()中的值是一样的
     *  返回值：
     *      数组：
     *          1.第一个参数state，用来存储state中的值
     *          2.第二个参数，state修改的派发器
     *              通过派发器可以发送操作state的命令
     *              具体的修改行为将会由另一个函数(reducer)执行
     */

    const [count, countDispatch] = useReducer(countReducer, 1)

    // const [count, countDispatch] = useReducer((/*...args*/ prevState, action) => {
    //     console.log('reducer执行了！', /*args*/ prevState, action)
    //     // 根据action的type来判断执行什么操作
    //     // if (action.type === 'ADD') {
    //     //     return prevState + 1
    //     // } else if (action.type === 'SUB') {
    //     //     return prevState - 1
    //     // }
    //     // return prevState
    //
    //     switch (action.type) {
    //         case 'ADD':
    //             return prevState + 1
    //         case 'SUB':
    //             return prevState - 1
    //         default:
    //             return prevState
    //     }
    //
    // }, 1)

    const addHandler = () => {
        // 增加count的值
        countDispatch({type: 'ADD'})
    }

    const subHandler = () => {
        // 减少count的值
        countDispatch({type: 'SUB'})
    }

    return (
        <div style={{fontSize: 30}}>
            <button onClick={subHandler}>减少</button>
            {count}
            <button onClick={addHandler}>增加</button>
        </div>
    )
}

export default App