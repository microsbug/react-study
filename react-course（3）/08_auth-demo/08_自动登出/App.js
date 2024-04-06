import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./components/Layout";
import AuthPage from "./pages/AuthPage";
import NeedAuth from "./components/NeedAuth";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "./store/reducer/authSlice";
import useAutoLogout from "./hooks/useAutoLogout";


const App = () => {
    useAutoLogout();
    return (
        <Layout>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"profile"} element={<NeedAuth><ProfilePage/></NeedAuth>}/>
                <Route path={"auth-form"} element={<AuthPage/>}/>
            </Routes>
        </Layout>
    );
};

export default App;
