import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import logoYardSale from '@logos/logo_yard_sale.svg';
import "@styles/CreateNewPassword.scss";

function CreateNewPassword(){
  const {changePassword, userData} = useOutletContext();
  const [emailInput, setEmailInput] = React.useState("");
  const [passwordInput, setPasswordInput] = React.useState("");
  const [empty, setEmpty] = React.useState(false); //Para valida campos vacíos
  const [validEmail, setValidEmail] = React.useState(false); //valida email errado
  const navigate = useNavigate();

  //Evento de click
  const handleConfirm = ()=>{//Genera cambio de contraseña
    //Se buscan campos vacios
    const emptyState = emailInput.length == 0 ? true : passwordInput.length == 0 ? true 
    : false;
    if(emptyState){
        setEmpty(true);
        return;
    }
    //se extrae lista de usuarios de la base de datos
    let userListInDataBase = [...userData];
    //Se busca si existe el email insertado por el usuario
    const userEmail = userListInDataBase.find((user)=>{
      return emailInput === user.email  
    });
    console.log("ele mail", userEmail)
    if(!userEmail){
      setValidEmail(true);
      return
    }
    else{
      console.log("entro a cambiar")
      changePassword(emailInput, passwordInput);
      navigate("/log-in");
    }
    
  }

  //Eventos de cambios en los input
  const handleInserEmail = ({target}) => {  
    setEmailInput(target.value);
    restoreStates();
  }
  const handleInserNewPassword = ({target}) => {  
    setPasswordInput(target.value);
    restoreStates();
  }
  //Restaura mensaje de error
  function restoreStates(){
    if(empty)
      setEmpty(false);
    if(validEmail)
      setValidEmail(false);
  }

  return(
      <div className="form-container">
        <img src={logoYardSale} alt="logo" className="logo"/>  
        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new password for you account</p>
        <form className="form">
          <label htmlFor="password" className="label">Email</label>
          {validEmail && <p>This email is not registered</p>}
          <input type="text" id="password" placeholder="insert your email"
           className="input input-password" onChange={handleInserEmail}/> 
          <label htmlFor="new-password" className="label">Password</label>
          <input type="password" id="new-password" placeholder="*********" 
          className="input input-password" onChange={handleInserNewPassword}/>  
          {empty && <p>There are empty fields</p>}
          <input type="button" className="primary-button login-button" value="Confirm" onClick={handleConfirm}/>
        </form>
      </div>
  )
}

export {CreateNewPassword}