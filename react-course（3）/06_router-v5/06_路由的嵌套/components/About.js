import React from 'react';
import Hello from "./Hello";
import {Route, useRouteMatch} from "react-router-dom";

const About = (props) => {

    const {path} = useRouteMatch();


    const clickHandler = ()=>{


    };
    return (
        <div>
            <button onClick={clickHandler}>点我一下</button>
            <h2>关于我们，其实是师徒4人</h2>
            <ul>
                <li>孙悟空</li>
                <li>猪八戒</li>
                <li>沙和尚</li>
                <li>唐僧</li>
            </ul>

            <Route path={`${path}/hello`}>
                <Hello/>
            </Route>
        </div>
    );
};

export default About;
