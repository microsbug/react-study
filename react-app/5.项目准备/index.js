import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

// 设置移动端的适配
// 除以几视口的宽度就是多少rem，所以我们现在的视口总宽度就是750rem
document.documentElement.style.fontSize = 100 / 750 + "vw"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    // 在React中使用严格模式
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
