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

            <form action="/" className="form">
              <label htmlFor="email" className="label">Email address</label>
              <input type="text" id="email" placeholder="platzi@example.cm" className="input input-email"/>

              <label htmlFor="password" className="label">Password</label>
              <input type="password" id="password" placeholder="*********" className="input input-password"/>

              <input type="button" value="Log in" className="primary-button login-button" onClick={handleLogin}/>
              <Link to="/">Forgot my password</Link>
            </form>

            <button className="secondary-button signup-button" onClick={handleSignUp}>Sign up</button>
        </div>
    )
}

export {LogIn}