import React from "react"
import { useGetStudentsQuery } from "./store/studentApi"
import StudentList from "./components/StudentList/StudentList"

let num = 0
const App = () => {
    // 调用Api查询数据
    // 这个钩子会调用一个对象作为返回值，请求过程中相关数据都在这个对象中存储
    const result = useGetStudentsQuery(num)
    /*

    currentData: undefined  // 当前参数的最新数据  适用场景：如果发送请求需要转圈，等待最新的数据使用
    data: undefined // 最新的数据  适用场景：如果发送请求等待最新数据回来再显示
    isError: false  // 布尔值，是否有错误
    error: Error()  // 对象，有错时才存在
    isFetching: true  // 布尔值，数据是否正在加载
    isLoading: true   // 布尔值，数据是否第一次加载
    isSuccess: false  // 布尔值，请求是否成功
    isUninitialized: false // 请求是否还没有发送
    refetch: () => {…}  // 一个函数用来重新加载数据
    status: "pending"   // 字符串，请求的状态

    */
    const { data: stus, isSuccess, isLoading, refetch } = result

    return (
        <div>
            <button onClick={() => num++}>改变num</button>
            <button onClick={() => refetch()}>重新加载数据</button>
            {isLoading && <p>数据加载中...</p>}
            {isSuccess && <StudentList stus={stus} />}
        </div>
    )
}

export default App
