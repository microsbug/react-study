import React, { useCallback, useEffect, useState } from 'react'
import StudentList from './components/StudentList/StudentList'

const STU_DATA = [
    {
        id: '1',
        attributes: {
            name: '张三',
            age: 18,
            gender: '男',
            address: '北京'
        }
    },
    {
        id: '2',
        attributes: {
            name: '李四',
            age: 20,
            gender: '女',
            address: '上海'
        }
    },
    {
        id: '3',
        attributes: {
            name: '王五',
            age: 22,
            gender: '男',
            address: '广州'
        }
    },
    {
        id: '4',
        attributes: {
            name: '赵六',
            age: 24,
            gender: '女',
            address: '深圳'
        }
    },
    {
        id: '5',
        attributes: {
            name: '孙七',
            age: 26,
            gender: '男',
            address: '杭州'
        }
    }
]

const App = () => {

    // 添加一个state来记录数据是否正在被加载，false表示没有加载数据，true表示正在加载数据
    const [loading, setLoading] = useState(false)

    // const [stuData, setStuData] = useState(STU_DATA)
    const [stuData, setStuData] = useState([])

    // 创建一个state，用来记录错误信息
    const [error, setError] = useState(null)

    /**
     * 将写死的数据替换为从接口: http://localhost:1337/api/students
     *      获取的数据
     *
     * 组件初始化时需要向服务器发送请求来获取数据
     */

    useEffect(() => {
        // 设置loading位true
        setLoading(true)
        // 重置错误
        setError(null)

        // 使用effect来加载数据
        // fetch() 用来向服务器发送请求来加载数据，是Ajax的升级版
        // fetch() 返回的是一个Promise对象,需要两个参数：
        //      1. 请求的URL
        //      2. 请求的配置对象：get，post，put，delete
        fetch('http://localhost:1337/api/students')
            .then(response => {
                // 判断是否请求成功
                if (response.ok) {
                    // 该方法可以将响应的json数据转换为一个js对象
                    // 返回的是一个Promise对象,需要使用then()来接收数据
                    return response.json()
                }

                // // 抛出一个错误
                // throw new Error('加载数据失败')
            })
            .then((data) => {
                // console.log(data.data)
                // 将获取的数据设置到state中
                setStuData(data.data)

                // 数据加载完毕，设置loading位false
                setLoading(false)
            })
            .then(e => {
                // catch中的回调函数，用来统一处理错误
                // console.log(e)
                // 代码执行到这里，说明没有成功加载到数据
                setLoading(false)
                // 设置错误状态
                setError(e)
            })

    }, [])

    return (
        <div className='app'>
            {
                (!loading && !error) && <StudentList stuData={stuData} />
            }
            {loading && <div>数据正在加载中...</div>}
            {error && <p>数据加载失败：{error}</p>}
        </div>
    )
}

export default App