import React, { useState } from 'react';
import classes from './App.module.css';
import A from './A';

const App = () => {

    /**
     * CSS模块:
     *  使用步骤：
     *      1.创建一个xxx.module.css文件
     *      2.在组件中引入css
     *          import classes from './xxx.module.css';
     *      3.通过classes来设置类
     *          className={classes.p1}
     *  Css模块的特点：
     *      可以动态的设置唯一的class值
     *          App_p1__2z3j4
     */

    const [showBorder, setShowBorder] = useState(false);

    const handleClick = () => {
        setShowBorder(true);
    }

    return (
        <div>
            <A />
            <p className={`${classes.p1} ${showBorder ? classes.borderStyle : ''}`}>我是一个段落</p>
            <button onClick={handleClick}>点我一下</button>
        </div>
    );
};

export default App;