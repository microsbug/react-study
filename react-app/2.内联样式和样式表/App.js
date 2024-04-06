import React, { useState } from 'react';
import './App.css';

const App = () => {

    const [redBorder, setRedBorder] = useState(true)

    /*const pStyle = {
        color: 'red',
        backgroundColor: '#bfa',
        border: redBorder ? 'red 1px solid' : 'blue 1px solid',
    }*/

    const clickHandler = () => {
        setRedBorder(false)
    }

    return (
        <div>
            {/*<p style={pStyle}>我是一个段落</p>*/}
            <p className={`p1 ${redBorder ? '' : 'blueBorder'}`}>我是一个段落</p>
            <button onClick={clickHandler}>点我一下</button>
        </div>
    );
};

export default App;