import {configureStore} from "@reduxjs/toolkit";
import {authApi} from "./api/authApi";
import {setupListeners} from "@reduxjs/toolkit/query";
import {authSlice} from "./reducer/authSlice";

const store = configureStore({

    reducer:{
        [authApi.reducerPath]:authApi.reducer,
        auth:authSlice.reducer
    },

    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware)

});

setupListeners(store.dispatch);

export default store;
