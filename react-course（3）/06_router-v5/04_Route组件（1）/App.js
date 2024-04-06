import {Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Student from "./components/Student";

function App() {
    return (
        <div className="App">
            <Menu/>

            {/*
                component用来指定路由匹配后被挂载的组件
                    component需要直接传递组件的类
                    通过component构建的组件，它会自动创建组件并且会自动传递参数
                        match -- 匹配的信息
                            isExact 检查路径是否完全匹配
                            params 请求的参数
                        location -- 地址信息
                        history -- 控制页面的跳转
                            push() 跳转页面
                            replace() 替换页面
            */}
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            {/*
                /student/:id 会匹配到 /student/xxx
            */}
            <Route path="/student/:id" component={Student}/>
        </div>

    );
}

export default App;
