import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: () => {
        const token = localStorage.getItem('token');

        if(!token){
            return {
                isLogged: false,
                token: null, // 服务器发送给我们的token默认有效期为1个月
                user: null
            };
        }

        return {
            isLogged: true,
            token,
            user: JSON.parse(localStorage.getItem('user'))
        };

    },
    reducers: {
        login(state, action) {
            state.isLogged = true;
            state.token = action.payload.token;
            state.user = action.payload.user;

            // 将数据同时存储到本地存储中
            localStorage.setItem('token', state.token);
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        logout(state, action) {
            state.isLogged = false;
            state.token = null;
            state.user = null;

            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }
    }
});

export const {
    login,
    logout
} = authSlice.actions;
