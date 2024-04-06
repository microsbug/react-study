import React from 'react'
import B from './B'

const A = (props) => {

    console.log('A组件渲染了')
    const [count, setCount] = React.useState(1)

    const handleClick = () => {
        setCount(prevState => prevState + 1)
    }

    const test = count % 6 === 0

    return (
        <div>
            <div>
                A --- {count}
                <br />
                <button onClick={handleClick}>增加</button>
                <button onClick={props.onAdd}>增加App</button>
                <B test={test} /> {/* B组件的props发生变化，B组件会重新渲染 */}
            </div>
        </div>
    )
}

export default React.memo(A)