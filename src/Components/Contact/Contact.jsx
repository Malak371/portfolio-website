import React from "react";
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'

const Contact = () => {
  return (
    <div id='contact' className="contact">
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>You can contact me at the following email address.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>malakua489@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact