import {Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Student from "./components/Student";
import Hello from "./components/Hello";

function App() {
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

                <Route path="*">
                    <div>路径错误</div>
                </Route>
            </Switch>
        </div>

    );
}

export default App;
