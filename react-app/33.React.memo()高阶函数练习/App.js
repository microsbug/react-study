import React from 'react'
import A from './components/A'

const App = () => {
    console.log('App组件渲染了')
    const [count, setCount] = React.useState(1)

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <div>
                <button onClick={handleClick}>+1</button>
                App --- {count}

                <A />
            </div>
        </div>
    )
}

export default App