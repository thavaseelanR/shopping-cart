import React, { Link, useState } from 'react';

import './login.css';


const Login = () => {

    return (

        <div className="login-container1">
            <div className="container1" id="container1">
                <div className="form-container1 sign-up-container1">
                    <form action="#" className="login-form">
                        <h1 className="create-acc text">Create Account</h1>
                        <div className="social-container1">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button className="login-sign-up-btn">Sign Up</button>
                    </form>
                </div>
                <div className="form-container1 sign-in-container1">
                    <form action="#" className="login-form">
                        <h1>Sign in</h1>
                        <div className="social-container1">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button className="login-sign-up-btn">Sign In</button>
                    </form>
                </div>
                <div className="overlay-container1">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p className="login-text-msg">To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" >Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login;