import React from "react"
import { useGetStudentsQuery } from "./store/studentApi"
import StudentList from "./components/StudentList/StudentList"

const App = () => {
    // 调用Api查询数据
    // 这个钩子会调用一个对象作为返回值，请求过程中相关数据都在这个对象中存储
    const result = useGetStudentsQuery(null, {
        // useQuery可以接受一个对象作为第二个参数，通过该对象可以对请求进行配置
        // selectFromResult: (result) => {
        // selectFromResult可以返回一个对象，该对象会覆盖useQuery返回的对象
        // 用来指定useQuery返回的结果
        // 可以覆盖其中的data属性，将请求结果中的data属性替换为另一个属性
        // if (result.data) {
        //     result.data = result.data.filter(
        //         (item) => item.attributes.age > 18
        //     )
        // }
        // return result
        // },

        pollingInterval: 0, // 设置轮训的间隔，单位毫秒，如果为0则不轮询
        skip: false, // 设置是否跳过当前请求
        // 默认情况下，useQuery会一直轮询请求，直到请求失败或者取消请求
        // 如果想让useQuery在请求失败或者取消请求后停止轮询，可以设置enabled属性为false
        // enabled: false,
        // 如果想让useQuery在请求失败或者取消请求后重新请求，可以设置enabled属性为true
        refetchOnMountOrArgChange: false, // 是否每次都重新加载数据,false相当于使用缓存，true每次重新加载数据，数字：数据缓存的时间单位（秒）
        refetchOnFocus: false, // 是否在页面获取焦点时重新加载数据
        refetchOnReconnect: false, // 是否在页面重新连接时重新加载数据
        refetchOnWindowFocus: false, // 是否在页面获取焦点时重新加载数据
    })
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
            <button onClick={() => refetch()}>重新加载数据</button>
            {isLoading && <p>数据加载中...</p>}
            {isSuccess && <StudentList stus={stus} />}
        </div>
    )
}

export default App
