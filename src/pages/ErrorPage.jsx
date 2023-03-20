import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

function ErrorPage(){
    const error = useRouteError();
    const navigate = useNavigate()

    const onNavigate = ()=>{
        navigate("/");
    }
    return (
        <div className="container" id="error-page">
          <h1>{error.status}</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
          <button className="btn-red" onClick={onNavigate}>Volver atrás</button>
        </div>
    );
}

export {ErrorPage}