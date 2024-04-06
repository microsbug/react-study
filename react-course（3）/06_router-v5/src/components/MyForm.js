import React, {useState} from 'react';
import {Prompt} from "react-router-dom";

const MyForm = () => {

    const [isPrompt, setIsPrompt] = useState(false);

    return (
        <div>
            <Prompt
                when={isPrompt}
                message={"将要离开页面！确认吗？"}/>
            <h2>表单</h2>
            <input
                type="text"
                onChange={e => setIsPrompt(e.target.value.trim().length !== 0)}
            />
        </div>
    );
};

export default MyForm;
