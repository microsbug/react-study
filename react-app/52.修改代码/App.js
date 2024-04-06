import React from "react"
import { useGetStudentsQuery } from "./store/studentApi"
import StudentList from "./components/StudentList/StudentList"

const App = () => {
    // 调用Api查询数据
    // 这个钩子会调用一个对象作为返回值，请求过程中相关数据都在这个对象中存储
    const { data, isSuccess, isLoading } = useGetStudentsQuery()
    // console.log(result)

    return (
        <div>
            {isLoading && <p>数据加载中...</p>}
            {isSuccess && <StudentList stus={data} />}
        </div>
    )
}

export default App
