import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logoYardSale from '@logos/logo_yard_sale.svg';
import emailIcon from '@icons/email.svg';
import "@styles/EmailSend.scss";

function EmailSend(){
  
    const navigate = useNavigate();
    const handleLogin = ()=>{
      navigate("/log-in");
    }

    return (
        <div className="login">
            <div className="form-container">
              <img src={logoYardSale} alt="logo" className="logo"/>
        
              <h1 className="title">Email has been sent!</h1>
              <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
        
              <div className="email-image">
                <img src={emailIcon} alt="email"/>
              </div>
        
              <button className="primary-button login-button" onClick={handleLogin}>Login</button>
        
              <p className="resend">
                <span>Didn't receive the email?</span>
                <Link to="">Resend</Link>
              </p>
            </div>
        </div>
    )
}

export {EmailSend}