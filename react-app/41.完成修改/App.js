import React, { useCallback, useEffect, useState } from 'react'
import StudentList from './components/StudentList/StudentList'
import StuContext from './store/StuContext'
import './App.css'

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

const App = (callback, deps) => {

    // 添加一个state来记录数据是否正在被加载，false表示没有加载数据，true表示正在加载数据
    const [loading, setLoading] = useState(false)

    // const [stuData, setStuData] = useState(STU_DATA)
    const [stuData, setStuData] = useState([])

    // 创建一个state，用来记录错误信息
    const [error, setError] = useState(null)

    const fetchData = useCallback(async () => {
        try {
            setLoading(true)
            setError(null)

            const res = await fetch('http://localhost:1337/api/students')
            // 判断请求是否加载成功
            if (res.ok) {
                const data = await res.json()
                setStuData(data.data)
            } else {
                throw new Error('数据加载失败')
            }
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }, [])

    // useEffect中不能传递async函数，所以需要在useEffect中调用一个async函数
    useEffect(() => {
        fetchData()
    }, [fetchData])

    const loadDataHandler = () => {
        fetchData()
    }

    return (
        <StuContext.Provider value={{fetchData}}>
            <div className='app'>
                <button onClick={loadDataHandler}>加载数据</button>
                {
                    (!loading && !error) && <StudentList stuData={stuData} />
                }
                {loading && <div>数据正在加载中...</div>}
                {error && <p>数据加载失败：{error}</p>}
            </div>
        </StuContext.Provider>
    )
}

export default App