import React from 'react';
import { useNavigate } from 'react-router-dom';
import "@styles/CreateNewPassword.scss";

function CreateNewPassword(){
  const navigate = useNavigate();

    const handleConfirm = ()=>{
      navigate("/login/email-send");
    }

    return(
        <div className="form-container">
          <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"/>

          <h1 className="title">Create a new password</h1>
          <p className="subtitle">Enter a new passwrd for yue account</p>

          <form action="/" className="form">
            <label htmlFor="password" className="label">Password</label>
            <input type="password" id="password" placeholder="*********" className="input       input-password"/>

            <label htmlFor="new-password" className="label">Password</label>
            <input type="password" id="new-password" placeholder="*********" className="input       input-password"/>

            <input className="primary-button login-button" type="submit" value="Confirm" onClick={handleConfirm}/>
          </form>
        </div>
    )
}

export {CreateNewPassword}