import React from "react"
import Card from "../UI/Card/Card"
import "./LogsForm.css"

const LogsForm = () => {
    /**
     * 当表单项发生变化的时候,获取用户输入的内容
     */
        // 创建撒个变量,用来存储表单中的数据
    let inputDate = ''
    let inputDesc = ''
    let inputTime = ''


    // 创建一个响应函数,监听表单项的变化
    const dateChangeHandler = (e) => {
        // 获取到当前触发事件的对象
        // 事件对象中保存了当前事件触发时的所有信息
        // event.target: 当前触发事件的对象(DOM对象)
        // console.log(e.target.value)
        inputDate = e.target.value
    }

    const descChangeHandler = (e) => {
        inputDesc = e.target.value
    }

    const timeChangeHandler = (e) => {
        inputTime = e.target.value
    }

    // 当表单提交时汇总表单的数据
    /**
     * 在React中表单不需要自行提交,而是通过React后台提交
     */
    const formSubmitHandler = (e) => {
        e.preventDefault()
        // 获取到表单中的数据,日期,内容,时长
        // 将数据拼装为一个对象
        const newLog = {
            date: new Date(inputDate),
            desc: inputDesc,
            time: +inputTime,
        }
        console.log(newLog)
        // console.log(inputDate, inputDesc, inputTime)

        /**
         * 提交表单后如何清空表单中的旧数据
         *    现在这种表单在React当中,我们称之为非受控组件
         * 我们可以将表单中的数据存储到state,
         *    然后将state设置为表单项value值,
         *    这样当表单项发生变化,state也会发生变化,
         *    反之, state发生变化,表单项也会随之改变,这种操作我们称之为双向绑定
         *    这样一来,表单项就成为了一个受控组件
         */
        // 清空表单项
        inputDate = ''
        inputDesc = ''
        inputTime = ''

    }

    return (
        <div>
            <Card className="logs-form">
                <form onSubmit={formSubmitHandler}>
                    <div className={"form-item"}>
                        <label htmlFor="date">日期</label>
                        <input
                            onChange={dateChangeHandler}
                            type="date"
                            id="date"
                            value={inputDate}
                        />
                    </div>
                    <div className={"form-item"}>
                        <label htmlFor="desc">内容</label>
                        <input
                            onChange={descChangeHandler}
                            type="text"
                            id="desc"
                            value={inputDesc}
                        />
                    </div>
                    <div className={"form-item"}>
                        <label htmlFor="time">时长</label>
                        <input
                            onChange={timeChangeHandler}
                            type="number"
                            id="time"
                            value={inputTime}
                        />
                    </div>
                    <div className={"form-btn"}>
                        <button>添加</button>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default LogsForm
