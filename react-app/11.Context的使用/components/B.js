import React, { useContext } from 'react';
import TestContext from '../store/testContext';

/**
 * 使用Context方式二：
 *      1.导入Context
 *      2.使用钩子函数useContext()来获取context中的数据
 *          该函数接收一个context对象作为参数，返回该context的当前值
 *      context.Provider
 *          - 表示数据的生产者，可以用它来指定context中的数据
 *          - 通过value来制定context中的数据,
 *            这样一来，在该组件的所有子组件都可以通过Context.Consumer或者useContext()来获取到context中的数据
 *       当我们通过context访问数据的时候，它会读取最近的context.Provider提供的value值，
 *          如果没有找到对应的Provider，那么就会使用Context默认值
 */
const B = () => {

    // 使用useContext()来获取context中的数据
    const ctx = useContext(TestContext)

    return (
        <div>
            {ctx.name} - {ctx.age}
        </div>
    );
};

export default B;