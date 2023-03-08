import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/LogIn.scss";

function LogIn(){
    const navigate = useNavigate()

    const handleLogin = ()=>{
        navigate("/");
    }
    const handleSignUp = ()=>{
        navigate("/login/sign-up");
    }

    return(
        <div className="form-container">
            <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"/>
            <h2 className='login-title'>Welcome to Yard Sale</h2>
            <form action="/" className="form">
              <label htmlFor="email" className="label">Email address</label>
              <input className="input input-email" type="text" id="email" placeholder="platzi@example.cm" />

              <label htmlFor="password" className="label">Password</label>
              <input className="input input-password" type="password" id="password" placeholder="*********" />

              <input type="button" value="Log in" className="primary-button login-button" onClick={handleLogin}/>
              <Link to="/login/create-new-password">Forgot my password</Link>
            </form>

            <button className="secondary-button signup-button" onClick={handleSignUp}>Sign up</button>
        </div>
    )
}

export {LogIn}