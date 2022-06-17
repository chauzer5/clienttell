import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './routes/signin';
import SignUp from './routes/signup';
import Home from './routes/home';
import Call from './routes/call';
import Edit from './routes/edit';
import Application from './routes/application';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />

        <Route path="signin" element={<SignIn />}/>
        <Route path="signup" element={<SignUp />} />
        <Route path="home" element={<Home />}/>
        <Route path="call" element={<Call />} />
        <Route path="call/:templateId" element={<Application />} />
        <Route path="edit" element={<Edit />} />
        <Route path="edit/:templateId" element={<App />} />
        <Route path="add" element={<App />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
