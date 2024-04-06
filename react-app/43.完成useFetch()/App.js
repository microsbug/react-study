import React, { useCallback, useEffect, useState } from 'react'
import StudentList from './components/StudentList/StudentList'
import StuContext from './store/StuContext'
import './App.css'
import useFetch from './hooks/useFetch'

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

    const {data: stuData, error, loading, fetchData} = useFetch({
        url: 'students'
    })

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