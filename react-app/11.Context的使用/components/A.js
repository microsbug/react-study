import React from 'react';
import TestContext from '../store/testContext';

/**
 * 使用方式一：
 *      1.引入context
 *      2.使用context.Consumer 组件来创建元素
 *          Consumer的标签体需要一个回调函数
 *          它会将context设置为回调函数的参数，通过参数就可以访问到context中的数据
 *
 */
const A = () => {
    return (
        <TestContext.Consumer>
            {(ctx) => {
                return <div>
                    {ctx.name} - {ctx.age}
                </div>
            }}
        </TestContext.Consumer>
    );
};

export default A;