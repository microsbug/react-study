import React from 'react'

const B = (props) => {
    console.log('B组件渲染了')
    return (
        <div>
            B组件
            <p>
                {
                    props.test && '测试数据'
                }
            </p>
        </div>
    )
}

/**
 * React.memo是一个高阶组件，它与React.PureComponent类似，但是它适用于函数组件。
 *      它接收另一个组件作为参数，并且返回一个包装过的新组建。
 *      包装过的新组建就会具有缓存功能,
 *          包装过后，只有组件的props发生变化，
 *          才会触发组件的重新渲染，否则就会使用缓存的组件。
 */
export default React.memo(B)