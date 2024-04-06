import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"


import authApi from "./authApi"

const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
})

// 去除缓存
setupListeners(store.dispatch)

export default store
