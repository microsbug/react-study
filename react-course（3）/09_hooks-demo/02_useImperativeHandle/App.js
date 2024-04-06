import React, {useEffect, useMemo, useRef, useState} from 'react';
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

    const someRef = useRef();

    useEffect(()=>{
        // console.log(someRef);
        // someRef.current.innerText = 'Some' + count;
        someRef.current.changeInpValue(count);
    });


    return (
        <div>
            <h1>App</h1>
            <h3>{count}</h3>
            <button onClick={()=>setCount(prevState => prevState + 1)}>点我</button>

            {/*
                无法直接去获取react组件的dom对象，
                    因为一个react组件中可能含有多个dom对象
                    React也不知道要给你谁
            */}
            <Some ref={someRef}/>
        </div>


    );
};

export default App;
