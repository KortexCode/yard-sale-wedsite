import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/LoginPage.scss";

function LoginPage(){

    return (
      <div className="login">
        <Outlet/>
      </div>
    )
}

export {LoginPage}