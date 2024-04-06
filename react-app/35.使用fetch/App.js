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

    // const [stuData, setStuData] = useState(STU_DATA)
    const [stuData, setStuData] = useState([])

    /**
     * 将写死的数据替换为从接口: http://localhost:1337/api/students
     *      获取的数据
     *
     * 组件初始化时需要向服务器发送请求来获取数据
     */

    useEffect(() => {
        // 使用effect来加载数据
        // fetch() 用来向服务器发送请求来加载数据，是Ajax的升级版
        // fetch() 返回的是一个Promise对象,需要两个参数：
        //      1. 请求的URL
        //      2. 请求的配置对象：get，post，put，delete
        fetch('http://localhost:1337/api/students')
            .then(response => {
                // 该方法可以将响应的json数据转换为一个js对象
                // 返回的是一个Promise对象,需要使用then()来接收数据
                return response.json()
            })
            .then((data) => {
                // console.log(data.data)
                // 将获取的数据设置到state中
                setStuData(data.data)
            })
            .then(data => {
                console.log(data)
            })

    }, [])

    return (
        <div className='app'>
            <StudentList stus={stuData} />
        </div>
    )
}

export default App