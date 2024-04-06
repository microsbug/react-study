/* 日志的容器 */
import LogItem from './LogItem/LogItem'
import './Logs.css'

const Logs = () => {
  // 模拟一组从服务器中获取的数据
  const logsDate = [
    {
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
    }
  ]

  // 将数据放在JSX中
  const logItemDate = logsDate.map(item => (
    <LogItem
      key={item.id}
      date={item.date}
      desc={item.desc}
      time={item.time}
    />
  ))

  return (
    <div className="logs">
      {/* 在父组件中可以直接在子组件中设置属性 */}
      {/* <LogItem test="123" hello="abc" fn={() => {}} />*/}

      {logItemDate}

      {/* {logsDate.map(item => (
        <LogItem
          key={item.id}
          date={item.date}
          desc={item.desc}
          time={item.time}
        />

        // 简写方式,这种需要你的参数与属性一一对应
        // <LogItem key={item.id} {...item} />
      ))} */}

      {/* <LogItem date={logsDate[0].date} desc={logsDate[0].desc} time={logsDate[0].time} /> */}
    </div>
  )
}

export default Logs
