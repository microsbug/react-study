import React, {useMemo, useState} from 'react';
import Some from "./components/Some";

function sum(a, b){
    const begin = Date.now();

    while (1){
        if(Date.now() - begin > 3000){
            break;
        }
    }

    console.log('函数执行了');
    return a + b;
}

const App = () => {
    const [count, setCount] = useState(1);

    let a = 123;
    let b = 456;

    if(count % 10 === 0){
        a += count;
    }

    // sum()函数每次组件渲染时都会执行
    //useMemo 用来存储函数的执行结果
    // const result = useMemo(()=>{
    //     return sum(a, b);
    // },[a, b]);

    const someEle = useMemo(()=>{
        return <Some a={a} b={b}/>;
    }, [a, b]);

    return (
        <div>
            <h1>App</h1>
            {/*<h2>result: {result}</h2>*/}
            {someEle}
            <h3>{count}</h3>
            <button onClick={()=>setCount(prevState => prevState + 1)}>点我</button>
        </div>


    );
};

export default App;
