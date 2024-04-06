import React from 'react';

const About = (props) => {
    // console.log(props);
    const clickHandler = ()=>{
        // push()需要一个location作为参数
        // props.history.push({
        //     pathname:'/student/2'
        // });

        props.history.replace({
            pathname:'/student/2',
            state:{name:'哈哈'}
        });
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
        </div>
    );
};

export default About;
