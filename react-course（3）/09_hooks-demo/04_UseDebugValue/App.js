import React, {useEffect, useInsertionEffect, useLayoutEffect, useMemo, useRef, useState} from 'react';
import Some from "./components/Some";
import useMyHook from "./hooks/useMyHook";

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
    const [show, setShow] = useState(false);
    const h3Ref = useRef();
    const divRef = useRef();
    useMyHook();




    return (
        <div>
            <h1>App</h1>
            <h3>{count}</h3>
            <button onClick={()=>setCount(prevState => prevState + 1)}>点我</button>
            <hr/>
            <button onClick={()=>setShow(prevState => !prevState)}>显示/隐藏</button>
            {
                show && <div ref={divRef} style={{width:100, height:100, backgroundColor:"red"}}/>
            }
        </div>


    );
};

export default App;
