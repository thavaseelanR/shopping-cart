import React, { useReducer } from "react";
import { createSlice } from "@reduxjs/toolkit";
import { loginService } from '../services'

import "./login.css";

const initialState = {
  loginFormInputValue: {
    userName: 'rthavaseelan66@gmail.com',
    password: 'thavasee',
  },
  isFormSubmit: false
};

const loginUserCreateSlice = createSlice({
  name: "loginUserCreateSlice",
  reducers: {
    setFormInputValue(state, action) {
      const { fieldName, filedValue } = action.payload;
      state.loginFormInputValue[fieldName] = filedValue;

    },
    submitFormValue(state, action) {
      const { formSubmit } = action.payload;
      state.isFormSubmit = formSubmit;
    }
  },
  initialState: initialState,
});

const loginUserReducer = loginUserCreateSlice.reducer;

const { setFormInputValue, submitFormValue } = loginUserCreateSlice.actions;

const Login = ({ history }) => {
  const [page, pageDispatch] = useReducer(loginUserReducer, initialState);

  const { isFormSubmit } = page;
  const {
    loginFormInputValue: { userName, password },
  } = page;

  if (isFormSubmit) {
    validateForm()
  }

  let emailVerificationMessage = false;

  if (userName) {
    const emailVerify = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(userName);
    emailVerificationMessage = emailVerify;
  }

  let emailErrorMessage = false
  if (userName) {
    emailErrorMessage = true
  }

  const chageInputValue = (fieldName) => {
    return (e) => {
      const value = e.target.value;
      pageDispatch(setFormInputValue({ fieldName, filedValue: value }));
    };
  };

  function validateForm() {
    return true
  }

  const formSubmit = async (e) => {
    e.preventDefault();
    if (validateForm) {
      const result = await loginService(userName, password);
      history.push('/admin-user-list')
    } else {
      pageDispatch(submitFormValue({ formSubmit: true }));
    }
  };

  return (
    <div className="login-container1">
      <div className="container1" id="container1">
        <div className="form-container1 sign-in-container1">
          <form action="#" className="login-form" onSubmit={formSubmit}>
            <h1>Sign in</h1>
            <div className="social-container1">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <div style={{ width: "100%" }}>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  onChange={chageInputValue("userName")}
                  value={userName}
                />
                {userName ? null : (
                  <div
                    style={{ marginLeft: "-90px", color: "red", display: isFormSubmit ? 'block' : 'none' }}
                    className="username-input-err"
                  >
                    Enter Username
                  </div>
                )}
                {
                  emailVerificationMessage && userName != '' ? null : <div
                    style={{ marginLeft: "-90px", color: "red", display: emailErrorMessage ? 'block' : 'none' }}
                    className="username-password-err"
                  >Invalid Email</div>
                }
              </div>
              <div className="login-password-container">
                <input
                  type="password"
                  placeholder="Password"
                  onChange={chageInputValue("password")}
                  value={password}
                />
                {password ? null : (
                  <div className="login-password-error-msg"
                    style={{
                      marginLeft: "-90px",
                      color: "red",
                      display: isFormSubmit ? 'block' : 'none'
                    }}
                    className="username-password-err"
                  >Enter Password</div>
                )}

              </div>
            </div>
            <a href="#">Forgot your password?</a>
            <button className="login-sign-up-btn">Sign In</button>
          </form>
        </div>
        <div className="overlay-container1">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p className="login-text-msg">
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
