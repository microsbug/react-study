import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Menu from './components/Menu'

const App = () => {
    return (
        <div>
            <h1>App</h1>
            <Menu></Menu>

            {/*
                Routes v6中新增加的组件
                    作用和Switch类似，都是用作Route的容器
                    Routes中Route只有一个会被匹配
                v6中，Route的component children render都变了
                    需要通过element来制定要挂载的组件
            */}
            <Routes>
                <Route path={'/'}
                       element={<Home />} />
                <Route path={'/about'}
                       element={<About />} />
            </Routes>
        </div>
    )
}

export default App
