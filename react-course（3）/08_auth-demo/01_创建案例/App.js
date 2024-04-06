import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./components/Layout";


const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"profile"} element={<ProfilePage/>}/>
            </Routes>
        </Layout>
    );
};

export default App;
