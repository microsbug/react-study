/* 日志的容器 */
import LogItem from './LogItem/LogItem'
import './Logs.css'
import Card from '../UI/Card/Card'

const Logs = (props) => {

    /**
     * logsData 用来存储学习的日志，
     *      这个数据除了当前组件Logs需要使用外，LogsForm也需要使用
     *      当遇到一个数据需要被多个组件使用时，我们可以及拿过数据放到这些组件共同的祖父元素中
     *      这样就可以使得多个组件元素方便的访问到这个数据
     *
     * state的提升
     */


    /**
     * 将数据放在JSX中
     */
    let logItemData = props.logsData.map((item, index) => (
        <LogItem
            // logIndex={index}
            // onDelLog={props.onDelLog}
            onDelLog={() => props.onDelLog(index)}
            key={item.id}
            date={item.date}
            desc={item.desc}
            time={item.time}
        />
    ))


    return (
        <Card className="logs">
            {
                logItemData
            }
        </Card>
    )
}

export default Logs
