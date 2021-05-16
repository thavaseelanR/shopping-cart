import React from 'react'

import HeaderComponent from '../auth-common-component/header-component';
import FooterComponent from '../auth-common-component/footer-component';
import './amazon-login.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

function AmazonLogin() {
    return (
        <div className="amazon-login-wrapper">
            <HeaderComponent />
            <div className="amazon-login-main-container">
                <div className="amazon-login-main-inner-container">
                    <div className="login-main-from-container">
                        <form className="login-from-container">
                            <h1 className="create-account-text">Sign-In</h1>
                            <div className="frist-name-container">
                                <label className="your-name-text">Email or mobile phone number</label>
                                <input type="text" className="input-first-name" />
                            </div>
                            <div className="continue-btn-container">
                                <button className="continue-button">continue</button>
                            </div>
                            <div className="privite-policy-text">By continuing, you agree to Amazon's <a href="#" className="condition-link">conditions of Use</a> and <a href="#" className="condition-link">Privacy Notice</a></div>
                            <div><FontAwesomeIcon icon={faCaretDown} style={{ transform: "rotate(270deg)" }}></FontAwesomeIcon> <a href="#" className="help-text">Neet help?</a></div>
                        </form>
              
                    </div>
                </div>
                <div>
                            <h5>New to Amazon?</h5>
                            <div className="continue-btn-container">
                                <button className="create-new-acc">Create your New account</button>
                            </div>
                        </div>
            </div>
            <FooterComponent />
        </div>
    )
}

export default AmazonLogin;
