import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./components/Layout";
import AuthPage from "./pages/AuthPage";

const App = () => {
    return (
        <div>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/profile" element={<ProfilePage />}></Route>
                    <Route path="/auth-form" element={<AuthPage />}></Route>
                </Routes>
            </Layout>
        </div>
    );
};

export default App;
