import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Router from './components/router/router';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="518235585740-rua578cuiqq37g1akp7o8pk9a1cb8hpv.apps.googleusercontent.com"> <Router /> </GoogleOAuthProvider>

   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
