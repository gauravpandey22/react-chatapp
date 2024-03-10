import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAK-1Qg5BEv0vHW-zs7mpDXnmU5talB1gk",
  authDomain: "react-chat-app-9d098.firebaseapp.com",
  databaseURL: "https://react-chat-app-9d098-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-9d098",
  storageBucket: "react-chat-app-9d098.appspot.com",
  messagingSenderId: "502116930902",
  appId: "1:502116930902:web:caf3a8688c221aa93f72f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
