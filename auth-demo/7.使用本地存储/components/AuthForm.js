/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState } from 'react';
import { useLoginMutation, useRegisterMutation } from '../store/api/AuthApi';
import { login } from '../store/reducer/authSlice';
import { useDispatch } from "react-redux"
import { useNavigate, useLocation } from 'react-router-dom'

const AuthForm = () => {

    const [isLoginForm, setIsLoginForm] = useState(true)

    // 引入注册的api
    const [regFn, { error: regError }] = useRegisterMutation()
    const [loginFn, { error: loginError }] = useLoginMutation()

    // 获取dispatch
    const dispatch = useDispatch()

    // 获取Navigate
    const navigate = useNavigate()
    const location = useLocation()

    // console.log('authForm -->', location.state.prevLocation)

    const from = location.state?.prevLocation?.pathname || "/"

    const usernameInp = useRef()
    const pwdInp = useRef()
    const emailInp = useRef()

    const submitHandler = e => {
        e.preventDefault()

        // 获取用户输入的内容
        const username = usernameInp.current.value
        const password = pwdInp.current.value

        // 处理登陆的功能
        if (isLoginForm) {
            // console.log('登陆 --> ', username, password);
            loginFn({
                identifier: username,
                password
            }).then(res => {
                if (!res.error) {
                    // 登陆成功后,需要想系统中添加一个标识,标记用户的登陆状态
                    // 登陆状态,(布尔值,token(jwt),用户信息)
                    dispatch(login(
                        {
                            token: res.data.then,
                            user: res.data.user
                        }
                    ))

                    // 跳转页面到之前都目录
                    navigate(from, { replace: true })
                }
            })
        } else {
            const email = emailInp.current.value
            // console.log('注册 --> ', username, password, email);
            regFn({
                username,
                password,
                email
            }).then(res => {
                if (!res.error) {
                    setIsLoginForm(true)
                }
            })
        }

    }

    return (
        <div>
            <p style={{ color: 'red' }}>
                {/* {regError && JSON.stringify(regError)} */}
                {regError && regError.data.error.message}
            </p>
            <p>
                {loginError && "用户名或密码错误"}
            </p>
            <h2>{isLoginForm ? "登陆" : "注册"}</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <input ref={usernameInp} type="text" placeholder='用户名' />
                </div>

                {
                    !isLoginForm &&
                    <div>
                        <input ref={emailInp} type="email" placeholder='邮箱' />
                    </div>
                }

                <div>
                    <input ref={pwdInp} type="password" placeholder='密码' />
                </div>
                <div>
                    <button>{isLoginForm ? "登陆" : "注册"}</button>
                    <a href="#" onClick={
                        event => {
                            event.preventDefault()
                            setIsLoginForm(prevState => !prevState)
                        }}>
                        {isLoginForm ? "没有账号?点击注册" : "已有账号?点击登陆"}
                    </a>
                </div>
            </form>
        </div>
    );
};

export default AuthForm;