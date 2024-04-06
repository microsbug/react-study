import React, {useRef, useState} from 'react';
import {useRegisterMutation} from "../store/api/authApi";

const AuthForm = () => {
    const [isLoginForm, setIsLoginForm] = useState(true);

    // 引入注册的api
    const [regFn, {error:regError}] = useRegisterMutation();

    const usernameInp = useRef();
    const pwdInp = useRef();
    const emailInp = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        // 获取用户输入的内容
        const username = usernameInp.current.value;
        const password = pwdInp.current.value;
        // 处理登录功能
        if(isLoginForm){
            console.log('登录 -->', username, password);
        }else{
            const email = emailInp.current.value;
            //console.log('注册 -->', username, password, email);
            regFn({
                username,
                password,
                email
            }).then(res => {
                if(!res.error){
                    // 注册成功
                    setIsLoginForm(true);
                }
            });
        }

    };

    return (
        <div>
            <p style={{color:'red'}}>
                {regError && "用户名或电子邮件重复"}
            </p>
            <h2>{isLoginForm?"登录":"注册"}</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <input ref={usernameInp} type="text" placeholder={"用户名"}/>
                </div>
                {
                    !isLoginForm &&
                    <div>
                        <input ref={emailInp} type="email" placeholder={"电子邮件"}/>
                    </div>
                }
                <div>
                    <input ref={pwdInp} type="password" placeholder={"密码"}/>
                </div>
                <div>
                    <button>{isLoginForm?"登录":"注册"}</button>
                    <a href="#" onClick={
                        event => {
                            event.preventDefault();
                            setIsLoginForm(prevState => !prevState);
                        }
                    }>
                        {
                            isLoginForm?
                            "没有账号？点击注册":
                            "已有账号？点击登录"}
                    </a>
                </div>
            </form>
        </div>
    );
};

export default AuthForm;
