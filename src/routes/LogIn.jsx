import React from 'react';
import { Link, useNavigate, useOutletContext, } from 'react-router-dom';
import "../styles/LogIn.scss";

function LogIn(){

    const [text, setText] = React.useState("");
    const {authUser} = useOutletContext()
    
    const navigate = useNavigate()

    const handleLogin = ()=>{
        console.log("dentrodehand", text)
        authUser(text);
        navigate("/");
        
    }
    const handleSignUp = ()=>{
        navigate("/login/sign-up");
    }
    const handleInsertUsername = (event)=>{
        setText(event.target.value);
    }

    return(
        <div className="form-container">
            <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"/>
            <h2 className='login-title'>Welcome to Yard Sale</h2>
            <form action="/" className="form">
              <label htmlFor="email" className="label">Username</label>
              <input className="input input-email" type="text" id="email" 
              placeholder="user name" onChange={handleInsertUsername} />

              <label htmlFor="password" className="label">Password</label>
              <input className="input input-password" type="password" id="password" 
              placeholder="*********" />

              <input type="button" value="Log in" className="primary-button login-button" 
              onClick={handleLogin}/>
              <Link to="/login/create-new-password">Forgot my password</Link>
            </form>

            <button className="secondary-button signup-button" onClick={handleSignUp}>Sign up</button>
        </div>
    )
}

export {LogIn}