import {configureStore} from "@reduxjs/toolkit";
import {authApi} from "./api/authApi";
import {setupListeners} from "@reduxjs/toolkit/query";

const store = configureStore({

    reducer:{
        [authApi.reducerPath]:authApi.reducer
    },

    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware)

});

setupListeners(store.dispatch);

export default store;
