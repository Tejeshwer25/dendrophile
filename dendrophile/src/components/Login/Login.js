import React from 'react';
import LoginText from './LoginText';
import LoginForm from './LoginForm';
import "./Login.css";

function Login() {
    return (
        <div className="login">
            <LoginText />
            <LoginForm />
        </div>
    )
}

export default Login;