import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { authSlice } from './reducer/authSlice'
import studentApi from './api/studentApi'


import authApi from "./authApi"

const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [studentApi.reducerPath]: studentApi.reducer,
        auth: authSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            studentApi.middleware,
            authApi.middleware
        )
})

// 去除缓存
setupListeners(store.dispatch)

export default store
