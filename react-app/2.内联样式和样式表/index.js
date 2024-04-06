import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // 在React中使用严格模式
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
