import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import '@styles/ErrorPage.scss';

function ErrorPage(){
    const error = useRouteError();
    const navigate = useNavigate()

    const onNavigate = ()=>{
      navigate("/");
    }
    return (
        <div className="error-page">
          <h1 className='error-page__title'>{error.status}</h1>
          <p className='error-page__message'>Sorry, an unexpected error has occurred.</p>
          <p className='error-page__error'>
            <i>{error.statusText || error.message}</i>
          </p>
          <button className='primary-button error-page__btn' onClick={onNavigate}>Volver atrás</button>
        </div>
    );
}

export {ErrorPage}