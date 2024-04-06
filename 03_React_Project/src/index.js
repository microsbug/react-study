// 34.useCallback()的练习使用/index.js 是js的入口文件
// 引入ReactDOM
import ReactDOM from 'react-dom/client'

// 创建一个JSX
const App = (
    <div>
        <h1>这是一个React项目</h1>
        <p>我终于有了第一个React项目了!</p>
    </div>
)

// 获取根容器
const root = ReactDOM.createRoot(document.getElementById('root'))
// 将App渲染到根容器
root.render(App)
