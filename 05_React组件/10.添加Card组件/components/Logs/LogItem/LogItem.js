import React from 'react'
import MyDate from './MyDate/MyDate'
import Card from '../../UI/Card/Card'
import './LogItem.css'

const LogItem = props => {
    // 在函数式组件中,属性就相当于函数的参数,可以通过参数来访问
    // 可以在函数式组件中定义一个props,props指向的是一个对象
    // 它包含了父组件中的所有参数
    // console.log(props)

    /**
     * props属性是只读,不可修改!
     */
    // props.desc = 'vue.js' // 不能修改props属性
    // console.log(props.desc)

    return (
        <Card className="item">
            <MyDate date={props.date}/>

            {/* 日志内容的容器 */}
            <div className="content">
                {/*
                    如果将组件中的数据全部写死,将会导致组件无法动态设置,不具有使用价值
                        我们希望组件中的数据可以由外部设置,在组件中,父组件可以通过props(属性)传递数据给子组件
                */}
                <h2 className="desc">{props.desc}</h2>
                <div className="time">{props.time}分钟</div>
            </div>
        </Card>
    )
}

export default LogItem
