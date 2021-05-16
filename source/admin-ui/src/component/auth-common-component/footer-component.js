import React from 'react'
import '../registration/registration.scss';

function FooterComponent() {
    return (
        <div>
            <div className="amazon-registration-footer-container">
                <div className="footer-inks-container">
                    <a href="#" className="footerlink">Conditions of Use</a>
                    <a href="#" className="footerlink">Privacy Notice</a>
                    <a href="#" className="footerlink"> Help</a>
                </div>
                <div className="footer-text">© 1996-2021, Amazon.com, Inc. or its affiliates</div>
            </div>
        </div>
    )
}

export default FooterComponent;

