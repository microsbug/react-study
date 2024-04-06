import React, {useState} from 'react'
import MyDate from './MyDate/MyDate'
import './LogItem.css'
import Card from '../../UI/Card/Card'
import ConfirmModal from "../../UI/ConfirmModal/ConfirmModal";

const LogItem = props => {

    // 添加一个state,记录是否显示模态窗口
    const [showConfirm, setShowConfirm] = useState(false)

    // 在函数式组件中,属性就相当于函数的参数,可以通过参数来访问
    // 可以在函数式组件中定义一个props,props指向的是一个对象
    // 它包含了父组件中的所有参数
    // console.log(props)

    /**
     * props属性是只读,不可修改!
     */
    // props.desc = 'vue.js' // 不能修改props属性
    // console.log(props.desc)

    /**
     * 删除item的响应函数
     */
    const deleteItemHandler = () => {

        // 显示确认窗口
        setShowConfirm(true)

        // 临时性
        // const isDel = window.confirm('该操作不可恢复，确认吗?')
        // if (isDel) {
        //     // 删除当前的item,其实就是从数据的state中移除指定的数据
        //     // props.onDelLog(props.logIndex)
        //     props.onDelLog()
        // }
    }

    /**
     * 取消函数
     */
    const cancelHandler = () => {
        setShowConfirm(false)
    }

    /**
     * 确认函数
     */
    const okHandler = () => {
        props.onDelLog()
    }

    return (
        <Card className="item">

            {showConfirm &&
                <ConfirmModal onOK={okHandler} onCancel={cancelHandler} confirmText="该操作不可恢复！请确认"/>}

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
            {/* 添加一个删除组件 */}
            <div>
                <div onClick={deleteItemHandler} className={'delete'}>×</div>
            </div>
        </Card>
    )
}

export default LogItem
