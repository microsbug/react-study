import React from 'react';
import {useLocation, useParams, useMatch, useNavigate} from "react-router-dom";

const STU_DATA = [
    {
        id:1,
        name:'刘备'
    },
    {
        id:2,
        name:'关羽'
    },
    {
        id:3,
        name:'沙和尚'
    },
    {
        id:4,
        name:'唐僧'
    },
];

const Student = () => {
    // 可以使用useParams()来获取参数
    const {id} = useParams();

    const location = useLocation();// 获取当前的地址信息

    // 如果路径匹配，则返回一个对象，不匹配则返回null
    //const match = useMatch("/student/:id");// 用来检查当前url是否匹配某个路由

    // useNavigate获取一个用于条件页面的函数
    const nav = useNavigate();


    const stu = STU_DATA.find(item => item.id === +id);

    const clickHandler = () =>{
        // nav('/about'); // 使用push，会产生历史记录
        nav('/about', {replace: true}); // 使用replace 不会产生新的记录
    };

    return (
        <div>
            <button onClick={clickHandler}>点我一下</button>
            <h2>{stu.id} --- {stu.name}</h2>
        </div>
    );
};

export default Student;
