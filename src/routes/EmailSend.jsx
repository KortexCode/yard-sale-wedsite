import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "@styles/EmailSend.scss";

function EmailSend(){
  
    const navigate = useNavigate();
    const handleLogin = ()=>{
      navigate("/");
    }

    return (
        <div className="login">
            <div className="form-container">
              <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"/>
        
              <h1 className="title">Email has been sent!</h1>
              <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
        
              <div className="email-image">
                <img src="./icons/email.svg" alt="email"/>
              </div>
        
              <button className="primary-button login-button" onClick={handleLogin}>Login</button>
        
              <p className="resend">
                <span>Didn't receive the email?</span>
                <Link to="/login">Resend</Link>
              </p>
            </div>
        </div>
    )
}

export {EmailSend}