/**
 * React中钩子函数只能在函数组件中使用，或者自定义钩子函数中调用
 *      当我们需要将React中钩子函数提取到一个公共区域时，就可以使用自定义钩子函数
 *
 * 自定义钩子函数其实就是一个普通函数，只不过这个函数的名字以use开头
 */
import { useCallback, useState } from 'react'

/**
 * 自定义钩子函数
 * @param reqObj 用来接收请求的参数
 * {
 *     url: string： 请求的url
 *     method: string： 请求的方法
 *     body: object： 请求体
 * }
 * @param callback 用来接收请求成功之后的回调函数
 * @returns {{fetchData: ((function(): Promise<void>)|*), data: *[], loading: boolean, error: unknown}}
 */
export default function useFetch(reqObj, callback) {

    const [data, setData] = useState([])

    // 添加一个state来记录数据是否正在被加载，false表示没有加载数据，true表示正在加载数据
    const [loading, setLoading] = useState(false)

    // 创建一个state，用来记录错误信息
    const [error, setError] = useState(null)

    const fetchData = useCallback(async (body) => {
        try {
            setLoading(true)
            setError(null)

            const res = await fetch('http://localhost:1337/api/' + reqObj.url, {
                method: reqObj.method || 'GET',
                headers: {
                    'Content-Type': reqObj.contentType || 'application/json'
                },
                body: body ? JSON.stringify({data: body}) : null
            })
            // 判断请求是否加载成功
            if (res.ok) {
                const data = await res.json()
                setData(data.data)

                // 如果传入了回调函数，就执行回调函数
                callback && callback()
            } else {
                throw new Error('数据加载失败')
            }
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }, [])

    // 设置返回值
    return {
        data,
        loading,
        error,
        fetchData
    }
}