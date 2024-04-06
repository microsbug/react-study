import React from 'react'
import B from './B'

const A = () => {

    console.log('A组件渲染了')
    const [count, setCount] = React.useState(1)

    const handleClick = () => {
        setCount(prevState => prevState + 1)
    }

    const test = count % 6 === 0

    return (
        <div>
            <div>
                <button onClick={handleClick}>+1</button>
                A --- {count}
                <B test={test} />
            </div>
        </div>
    )
}

export default React.memo(A)
