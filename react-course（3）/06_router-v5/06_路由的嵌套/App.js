import {Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Student from "./components/Student";
import Hello from "./components/Hello";

function App() {
    return (
        <div className="App">
            <Menu/>
            <Route exact path="/" component={Home}/>
            <Route path="/about">
                <About/>
            </Route>

        </div>

    );
}

export default App;
