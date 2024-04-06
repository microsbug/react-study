import React from 'react';

const LogFilter = (props) => {

    // 创建监听change的相应函数
    const yearChangeHandler = (e) => {
        // console.log(+e.target.value)
        props.onYearChange(+e.target.value)
    }

    return (
        <div>
            年份：<select onChange={yearChangeHandler} value={props.year}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
        </select>
        </div>
    );
};

export default LogFilter;