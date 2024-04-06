import React from 'react'
import { Outlet } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h2>关于页面</h2>
            <ul>
                <li>张三</li>
                <li>李四</li>
                <li>王五</li>
                <li>赵六</li>
            </ul>

            {/* 通过子路由来对hello组建进行映射 /about/hello */}
            {/* <Hello /> */}

            {/* <Routes>
                <Route path={"hello"} element={<Hello/>} />
            </Routes> */}

            {/* 
                Outlet:表示嵌套路由中的组件
                    当嵌套路由中的组件匹配成功了，Outlet则表示嵌套路由中的组件
                    当嵌套路由中的组件没有匹配成功，Outlet则什么都不是
            */}
            <Outlet />
        </div>
    )
}

export default About