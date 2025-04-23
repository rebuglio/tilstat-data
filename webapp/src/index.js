import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
import App from './app';
import {BrowserRouter as Router} from 'react-router-dom';
import CookieBanner from "./pages/cookie-banner";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CookieBanner />
        <Router basename="/tilstat">
            <App/>
        </Router>
    </React.StrictMode>
);
