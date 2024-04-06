/* 日志的容器 */
import LogItem from './LogItem/LogItem'
import './Logs.css'

const Logs = () => {
  return (
    <div className="logs">
      <LogItem />
      <LogItem />
      <LogItem />
      <LogItem />
    </div>
  )
}

export default Logs
