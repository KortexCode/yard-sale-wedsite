import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import "@styles/SignUp.scss";

function SignUp() {
    const {authUser, userData, userSignUp} = useOutletContext();
    const [register, setRegister] = React.useState({
        name: "",
        email: "",
        password: "",
        ordersList: [],
    });
    const [validation, setValidation] = React.useState({
        validName: true,
        validEmail: true,
    });
    const [empty, setEmpty] = React.useState(false)

    const navigate = useNavigate();

    const handleCreate = () => {
        
        if(!register.name.length) 
            setEmpty(true);
        else if(!register.email.length)
            setEmpty(true);
        else if(!register.password.length)
            setEmpty(true);
        
        else if(validation.validName && validation.validEmail){
            console.log("registrado")
            userSignUp(register);
            authUser(register.name);
            setEmpty(false)
            navigate("/");
        }
        else{
            alert("Error de registro")
        }
    }

    //Eventos de cabios en los input
    const handleTextName = ({target}) => { 
        const text = (target.value).toLowerCase();
        //Guardando datos de registro
        setRegister({...register, ...{name: text }});
        //Validando que los datos ingresados sean o no existentes
        const validationError = data_validation(text );
        console.log("validation error", validationError)
        //El objeto validation servirá para saber si se debe hacer el registro o no
        if(validationError){
            setValidation({...validation, ...{validName: false}})
        }else{
            setValidation({...validation, ...{validName: true}})
        }
    }
    const handleTextEmail = ({target}) => { 
        const text = (target.value).toLowerCase();
        setRegister({...register, ...{email: text}});

        const validationError = data_validation(text);
        if(validationError){
            setValidation({...validation, ...{validEmail: false}})
        }else{
            setValidation({...validation, ...{validEmail: true}})
        }
    }
    const handleTextPassword = ({target}) => { 
        setRegister({...register, ...{password: target.value}});
    }

    //Validar datos de registro con los datos almacenados de registros previos.
    const data_validation = (value) => { 
        const validation= userData.some((user)=>{
            return user.name === value || user.email === value ?  true : false;  
        })
        return validation;
    }

    console.log("REGISTRO ACTUAL", register);
    console.log("REGISTRO STORAGE", userData);

    return (
        <div className="login">
            <div className="Sign-up__form-container">
                <h1 className="title">My account</h1>

                <form action="/" className="form">
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