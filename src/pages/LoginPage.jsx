import React from "react";
import { Outlet, useNavigate, useOutletContext } from "react-router-dom";
import arrowIcon from "@icons/flechita.svg";
import "../styles/LoginPage.scss";

function LoginPage() {
  const auth = useOutletContext();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="login">
      <img
        src={arrowIcon}
        alt="arrow-back"
        onClick={handleBack}
        className="login__arrow-back"
      />
      <Outlet context={auth} />
    </div>
  );
}

export { LoginPage };
