import React, { useRef } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import logoYardSale from '@logos/logo_yard_sale.svg';
import "@styles/CreateNewPassword.scss";

function CreateNewPassword(){
  const {changePassword, userData} = useOutletContext();
  const [empty, setEmpty] = React.useState(false); //Para valida campos vacíos
  const [validEmail, setValidEmail] = React.useState(false); //valida email errado
  const navigate = useNavigate();
  const form = useRef(null);//Se ferencia el formulario

  //Evento de click
  const handleConfirm = ()=>{//Genera cambio de contraseña
    //Creamos un objeto FormData para extrear los datos del atributo name de los inputs
    let formData = new FormData(form.current);
    console.log("oye", formData.get('email'));
    const {email, newPassword} = Object.fromEntries(formData);//Se obtienen las entradas

    //Se buscan campos vacios
    const emptyState = email.length == 0 ? true 
    : newPassword.length == 0 ? true : false;
    if(emptyState){//Se hay campos vacios se muestra mensaje de error
      setEmpty(true);
      return;
    }
    //De no haber campos vacios se extrae lista de usuarios de la base de datos
    let userListInDataBase = [...userData];
    //Se busca si existe el email insertado por el usuario
    const userEmail = userListInDataBase.find((user)=>{
      return email === user.email  
    });
    if(!userEmail){//Si no existe el email se muestra mensaje de error
      setValidEmail(true);
      return
    }
    else{//De lo contrario se hace el cambio de constraseña
      changePassword(email, newPassword);
      navigate("/log-in");
    }
    
  }
  //Eventos de cambios en los input
  const handleInserEmail = () => {  
    restoreStates();
  }
  const handleInserNewPassword = () => {  
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
        <form action="/" className="form" ref={form}>
          <label htmlFor="password" className="label">Email</label>
          {validEmail && <p className='valid-field'>This email is not registered</p>}
          <input type="text" /* id="password" */ name='email' placeholder="insert your email"
           className="input input-password" onChange={handleInserEmail}/> 
          <label htmlFor="new-password" className="label">Password</label>
          <input type="password" /* id="new-password" */ name='newPassword' placeholder="*********" 
          className="input input-password" onChange={handleInserNewPassword}/>  
          {empty && <p className='valid-field'>There are empty fields</p>}
          <input type="button" className="primary-button login-button" value="Confirm" onClick={handleConfirm}/>
        </form>
      </div>
  )
}

export {CreateNewPassword}