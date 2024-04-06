import {useDebugValue, useEffect} from "react";

const useMyHook = () => {

    useDebugValue('哈哈');

    useEffect(()=>{
        console.log('自定义钩子的代码');
    });

};

export default useMyHook;
