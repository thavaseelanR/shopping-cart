import React from 'react'
import '../registration/registration.scss';
import image from '../aserts/amazon-logo.jpg';

function HeaderComponent() {
    return (
        <div>
            <div className="amazon-registration-header-container">
                <a href="#" className="header-main-container">
                    <img src={image} className="header-logo-container" />
                </a>
            </div>
        </div>
    )
}

export default HeaderComponent;
