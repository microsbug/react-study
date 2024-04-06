import React from 'react';

/**
 * Context相当于是一个公共的存储空间，
 *      我们可以将多个组件中都需要访问的数据统一存储到一个Context中，
 *      这样无需通过props层层传递数据，只需要在需要的组件中引入Context即可。
 * 通过React.createContext()创建一个Context对象，
 */
const testContext = React.createContext({
    name: '张三',
    age: 18,
});

export default testContext