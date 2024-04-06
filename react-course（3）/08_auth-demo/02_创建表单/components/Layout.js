import React from 'react';
import MainMenu from "./MainMenu";


const Layout = props => {
    return (
        <div>
            <MainMenu/>
            <hr/>
            {props.children}
        </div>
    );
};

export default Layout;
