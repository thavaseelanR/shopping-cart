import React from 'react';
import './registration.scss';
import image from '../aserts/amazon-logo.jpg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import HeaderComponent from '../auth-common-component/header-component';
import FooterComponent from '../auth-common-component/footer-component';

function Registration() {
    return (
        <div className="amazon-registration-wrapper">
            <HeaderComponent />
            <div className="amazon-registration-main-container">
                <div className="amazon-registration-main-inner-container">
                    <div className="registration-main-from-container">
                        <form className="registration-from-container">
                            <h1 className="create-account-text">Create Account</h1>
                            <div className="frist-name-container">
                                <label className="your-name-text">Your name</label>
                                <input type="text" className="input-first-name" />
                            </div>

                            <div className="frist-name-container">
                                <label className="your-name-text">Mobile number</label>
                                <div className="phone-number-container">
                                    <button className="ph-number-code">In +91 <FontAwesomeIcon icon={faCaretDown} /></button>
                                    <input type="text" className="input-first-phone-number" />
                                </div>

                            </div>
                            <div className="frist-name-container">
                                <label className="your-name-text">Email(optional)</label>
                                <input type="text" className="input-first-name" />
                            </div>
                            <div className="frist-name-container">
                                <label className="your-name-text">Password</label>
                                <input type="text" className="input-first-name" />
                                <div className="password-text">Password must be at least 6 charactor</div>
                            </div>

                            <div className="text-message">
                                <div className="text-message-one">We will send you a text to verify your phone.</div>
                                <div className="text-message-two">Message and Data rates may apply.</div>
                            </div>
                            <div className="continue-btn-container">
                                <button className="continue-button">continue</button>
                            </div>
                            <div className="border-line">
                                <div className="sin-in-link-container">
                                    <div className="account-text">Already have an account?</div>
                                    <a href="#" className="sign-in-link">Sign in</a>
                                    <div className="create-free-bussiness-account">
                                        <div className="create-buss-acc-text">
                                            Already have an account?</div>
                                        <a href="#" className="create-buss-acc-link">Create a free bussiness account</a>
                                    </div>
                                </div>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}

export default Registration;

