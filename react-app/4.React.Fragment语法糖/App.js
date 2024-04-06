import React from 'react';
import Out from './out';

const App = () => {

    /**
     * React.Fragment
     *  - 是一个专门用来作为父容器的组件
     *      它只会把它里面的元素直接返回，不会创建任何多余的元素
     *      - 作用：可以在不增加多余的节点的情况下，将多个节点进行返回
     *      - 语法：<React.Fragment>...</React.Fragment>
     *      - 语法糖：<></>  简写形式语法糖
     *  - 当我们需要一个父容器，
     *    但是不想增加多余的节点的时候，就可以使用React.Fragment
     */

    return (
        // <React.Fragment>
        <>
            <div>我是第一个组件</div>
            <div>我是第二个组件</div>
            <div>我是第三个组件</div>
        </>
        // </React.Fragment>
    );
};

export default App;