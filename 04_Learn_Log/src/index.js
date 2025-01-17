import ReactDOM from 'react-dom/client'
// 引入样式表
import './index.css'

const App = (
  <div className="logs">
    {/* 日志项的容器 */}
    <div className="item">
      {/* 日期的容器 */}
      <div className="date">
        <div className="month">四月</div>
        <div className="day">19</div>
      </div>
      {/* 日志内容的容器 */}
      <div className="content">
        <h2 className="desc">学习React</h2>
        <div className="time">40分钟</div>
      </div>
    </div>

    {/* 日志项的容器 */}
    <div className="item">
      {/* 日期的容器 */}
      <div className="date">
        <div className="month">四月</div>
        <div className="day">19</div>
      </div>
      {/* 日志内容的容器 */}
      <div className="content">
        <h2 className="desc">学习React</h2>
        <div className="time">40分钟</div>
      </div>
    </div>
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(App)
