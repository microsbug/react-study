import React from 'react';
import ReactDOM from "react-dom";
import './BackDrop.css'

// 获取backDrop的根节点
const backdropRoot = document.getElementById('backdrop-root')

const BackDrop = (props) => {
    return ReactDOM.createPortal(<div className="backdrop">
        {props.children}
    </div>, backdropRoot)


};

export default BackDrop;