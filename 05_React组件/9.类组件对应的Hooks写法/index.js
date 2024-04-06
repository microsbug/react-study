import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

/**
 * 组件
 *    1.1.函数式组件
 *      函数式组件就是返回JSX的普通函数
 *      组件的首字母必须大写
 *    2.2.类组件
 */

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
