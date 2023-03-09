import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import "../styles/LoginPage.scss";

function LoginPage(){
    const auth = useOutletContext();
  
    return (
      <div className="login">
        <Outlet context={auth}/>
      </div>
    )
}

export {LoginPage}