import React, { useCallback, useState } from 'react'
import A from './components/A'

const App = () => {
    console.log('App组件渲染了')
    const [count, setCount] = React.useState(1)

    const [num, setNum] = useState(1)

    /**
     * useCallback是一个钩子函数，用来创建React中的回调函数。
     *     useCallback创建的回调函数不会总在组件重新渲染时创建新的函数
     *     它接收两个参数：
     *          1.参数是回调函数
     *          2.参数是依赖项数组
     *              - 当依赖项数组中的值发生变化时，useCallback创建的回调函数才会重新创建
     *              - 如果不指定依赖项数组，useCallback每次都会重新创建
     *              - 一定要将回调函数中使用到的所有外部变量放入依赖项数组中(除了setState函数，因为它是稳定的)
     *              - 如果依赖项数组为空，useCallback只会创建一次
     */
    const handleClick = useCallback(() => {
        setCount(prevState => prevState + num)
        setNum(num + 1)
    }, [num])

    return (
        <div>
            <div>
                App --- {count}
                <button onClick={handleClick}>增加</button>

                <A onAdd={handleClick} />
            </div>
        </div>
    )
}

export default App