import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import "@styles/SignUp.scss";

function SignUp() {
    const {authUser, userData, userSignUp} = useOutletContext();
    //ESTADOS
    const [register, setRegister] = React.useState({//datos del usuario a registrar
        name: "",
        email: "",
        password: "",
        ordersList: [],
    });
    const [validation, setValidation] = React.useState({//Para validar username e email existentes
        validName: true,
        validEmail: true,
    });
    const [empty, setEmpty] = React.useState(false); //Para valida campos vacíos

    const navigate = useNavigate();
    //Evento de creación de cuenta
    const handleCreate = () => { 
        const emptyState = register.name.length == 0 ? true : register.email.length == 0 ? true 
        : register.password.length == 0 ? true : false;
        if(emptyState){
            setEmpty(emptyState);
        }
        else if(validation.validName && validation.validEmail){
            userSignUp(register);
            authUser(register.name);
            navigate("/");
        }
        else{
            alert("Error de registro")
        }
    }

    //Eventos de cambios en los input
    const handleTextName = ({target}) => { 
        const text = (target.value).toLowerCase();
        //Guardando datos de registro
        setRegister({...register, ...{name: text }});
        //Validando que los datos ingresados sean o no existentes
        data_validation(text, "username");
        restoreMessage();
    }
    const handleTextEmail = ({target}) => { 
        const text = (target.value).toLowerCase();
        setRegister({...register, ...{email: text}});
        data_validation(text, "email");
        restoreMessage();  
    }
    const handleTextPassword = ({target}) => { 
        setRegister({...register, ...{password: target.value}});
        restoreMessage();
    }
    //Validar datos de registro con los datos de registros previos almacenados. 
    const data_validation = (value, flag) => { 
        //El estado "validation" servirá para saber si se debe hacer el registro o no:
        if(flag === "username"){
            //Validar su usuario existe
            const validationUsername = userData.some((user)=>{
               
                return user.name === value;  
            })
            if(validationUsername){
                setValidation({...validation, ...{validName: false}})
            }else{
                setValidation({...validation, ...{validName: true}})
            }
        }
        else{
            console.log("el value", value)
            //Valida si el email existe
            const validationEmail = userData.some((user)=>{
                return user.email === value;  
            })
            if(validationEmail){
                setValidation({...validation, ...{validEmail: false}})
            }else{
                setValidation({...validation, ...{validEmail: true}})
            }
        }
    }
    function restoreMessage(){
        if(empty){
            setEmpty(false);
        }
    }

    console.log("REGISTRO ACTUAL", register);
    console.log("REGISTRO STORAGE", userData);

    return (
        <div className="login">
            <div className="Sign-up__form-container">
                <h1 className="title">My account</h1>

                <form action="/" className="Sign-up__form">
                    <div>
                        <label htmlFor="name" className="label">Name</label>
                        {!validation.validName && <p>user name already exist</p>}
                        <input type="text" id="name" placeholder="Teff"
                            className="input input-name" onChange={handleTextName} />
                        {!validation.validEmail && <p>user email already exist</p>}
                        <label htmlFor="email" className="label">Email</label>
                        <input type="text" id="email" placeholder="platzi@example.com"
                            className="input     input-email" onChange={handleTextEmail} />

                        <label htmlFor="password" className="label">Password</label>
                        <input type="password" id="password" placeholder="*********"
                            className="input       input-password" onChange={handleTextPassword} />
                    </div>
                    {empty && <p>There are empty fileds...</p>}
                    <input type="button" value="Create" className="primary-button login-button"
                        onClick={handleCreate} />
                </form>
            </div>
        </div>
    )
}

export { SignUp }