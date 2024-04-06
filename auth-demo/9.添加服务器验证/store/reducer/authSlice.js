import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: () => {
        const token = localStorage.getItem('token')
        if (!token) {
            return {
                isLogged: false,
                token: null, // 服务器发送给我们的token默认有效期为1个月
                user: null,
                expirationTime: 0 // 登陆状态失效的时间
            }
        }

        return {
            isLogged: true,
            token,
            user: JSON.stringify(localStorage.getItem('user')),
            expirationTime: +localStorage.getItem('expirationTime')
        }

    },
    reducers: {
        login(state, action) {
            state.isLogged = true
            state.token = action.payload.token
            state.user = action.payload.user

            // 获取当前时间戳
            const currentTime = Date.now()
            // 设置登陆的有效期
            const timeout = 1000 * 60 * 60 * 24 * 7 // 一周

            state.expirationTime = currentTime + timeout // 设置失效的日期

            // 将数据同时存储到本地存储中
            localStorage.setItem('token', state.token)
            localStorage.setItem('user', JSON.stringify(state.user))
            localStorage.setItem('expirationTime', state.expirationTime + "")
        },
        logout(state) {
            state.isLogged = false
            state.token = null
            state.user = null

            localStorage.removeItem('token')
            localStorage.removeItem('user')
            localStorage.removeItem('expirationTime')
        }
    }
})

export const { login, logout } = authSlice.actions