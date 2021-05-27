import React from 'react';
import "./LoginForm.css";

function LoginForm() {
    return (
        <div className="loginForm">
            <div className="loginForm__header">
                <h3>Welcome to Dendrophile</h3>
            </div>

            <div className="loginForm__form">
                <form>
                    <input type="email" placeholder="Email ID" className="loginForm__form--input"/>

                    <input type="password" placeholder="Password" className="loginForm__form--input loginForm__form--pass" />
                    <a href="/" className="loginForm__form--forgotpass">Forgot Password?</a>

                    <select name="position" className="loginForm__form--input">
                        <option disabled selected>Category</option>
                        <option>Admin</option>
                        <option>Company</option>
                        <option>HK Supervisor</option>
                        <option>Waste Collector</option>
                    </select>
                    
                    <input type="submit" placeholder="Login" className="loginForm__form--btn"/>
                </form>
            </div>

            <p>New User? <a href="/">Sign Up</a></p>
        </div>
    )
}

export default LoginForm;