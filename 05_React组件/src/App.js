import Logs from './components/Logs/Logs'
import LogsForm from './components/LogsForm/LogsForm'
import './App.css'
import { useState } from "react";

const App = () => {

    // 模拟一组从服务器中获取的数据
    const [logsData, setLogsData] = useState([{
        id: '001',
        date: new Date(2023, 1, 1, 15, 20),
        desc: '学习前端React',
        time: '20'
    },
        {
            id: '002',
            date: new Date(2023, 1, 11, 15, 30),
            desc: '学习前端Angular',
            time: '30'
        },
        {
            id: '003',
            date: new Date(2023, 1, 12, 15, 40),
            desc: '学习前端Vue',
            time: '50'
        },
        {
            id: '004',
            date: new Date(2023, 1, 13, 15, 50),
            desc: '学习前端JavaScript',
            time: '10'
        },
        {
            id: '005',
            date: new Date(2022, 1, 13, 15, 50),
            desc: '学习前端HTML',
            time: '100'
        },
        {
            id: '006',
            date: new Date(2022, 1, 13, 15, 50),
            desc: '学习前端Java',
            time: '200'
        }
    ])
    
    /**
     *下一步：
     *  将logsForm中的数据传递给App组件，然后App组件将新的日志添加到数组中！
     */

    /**
     * 定义一个函数
     */
    const saveLogHandler = (newLog) => {
        //向新的日志中添加id
        newLog.id = Date.now() + ''
        // console.log('App.js -> ', newLog)

        // 将新的数据添加到数组中
        // logsData.push(newLog)
        setLogsData([...logsData, newLog])
    }

    /**
     * 定义一个函数，从日志中删除一条日志
     */
    const delLogByIndex = (id) => {
        // logsData.splice(index, 1)
        setLogsData(prevState => {
            return prevState.filter(item => item.id !== id)
        })
    }

    /**
     * 定义一个函数，从日志中删除一条日志
     */
    const delLogById = (index) => {
        // logsData.splice(index, 1)
        setLogsData(prevState => {
            const newLogs = [...prevState]
            newLogs.splice(index, 1)
            return newLogs
        })
    }

    return (
        <div className="app">
            {/* 引入LogsForm组件 */}
            <LogsForm onSaveLog={saveLogHandler} />
            <Logs logsData={logsData} onDelLog={delLogById} />
        </div>
    )
}

export default App
