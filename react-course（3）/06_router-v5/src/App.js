import {Redirect, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Student from "./components/Student";
import Hello from "./components/Hello";
import MyForm from "./components/MyForm";
import {useState} from "react";
import Login from "./components/Login";

function App() {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <div className="App">
            <Menu/>
            {/*
                可以将Route统一放到一个Switch中，
                    一个Switch中只会有一个路由显示
            */}
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path={"/login"}>
                    <Login/>
                </Route>

                <Route path="/form">
                    {
                        isLogin ? <MyForm/>:
                            <Redirect to={"/login"}/>
                    }
                </Route>

                {/*<Redirect from={"/abc"} to={"/form"}/>*/}

                <Route path="*">
                    <div>路径错误</div>
                </Route>
            </Switch>
        </div>

    );
}

export default App;
