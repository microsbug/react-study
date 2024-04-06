import React, {useState} from "react"
import Card from "../UI/Card/Card"
import "./LogsForm.css"

const LogsForm = (props) => {

    const [inputDate, setInputDate] = useState('')
    const [inputDesc, setInputDesc] = useState('')
    const [inputTime, setInputTime] = useState('')

    // console.log(props.onSaveLog);

    // 创建一个响应函数,监听表单项的变化
    const dateChangeHandler = (e) => {
        setInputDate(e.target.value)
    }

    const descChangeHandler = (e) => {
        setInputDesc(e.target.value)
    }

    const timeChangeHandler = (e) => {
        setInputTime(e.target.value)
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

        // 当要添加新的日志的时候，调用父组件传递过来的函数
        props.onSaveLog(newLog)

        // 清空表单项
        setInputDate('')
        setInputDesc('')
        setInputTime('')

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
