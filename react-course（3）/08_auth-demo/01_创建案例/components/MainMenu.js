import React from 'react';
import {Link} from "react-router-dom";

const MainMenu = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link to={"/"}>首页</Link>
                </li>
                <li>
                    <Link to={"/profile"}>用户信息</Link>
                </li>
            </ul>
        </header>
    );
};

export default MainMenu;
