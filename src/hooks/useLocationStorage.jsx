import React from 'react'

function useLocationStorage(initialItem, item){

  const initialState = {
    username: null,
    password: null,
    email: null,
    orderList: [],
  }

  //Datos de usuario
  const [userData, setUserData] = React.useState(initialItem);

/* 
  const [userSignUp, setUserSignUp] = React.useState([]);
  const {userAuth, setUserAuth} = React.useState({
    username: null,
    password: null,
  })
 */
  //Cuando la apalicación de inicia por primera vez:
  React.useEffect(()=>{

    const dataInLocalstorage = localStorage.getItem(item);
    if(!dataInLocalstorage){
      console.log("almacenamiento vacio")
      localStorage.setItem(item, JSON.stringify(initialItem));
    }else{
      console.log("almacenamiento con datos")
      setUserData(JSON.parse(dataInLocalstorage))
    }
    console.log("datos", dataInLocalstorage);

  },[])
  
    
  return {
    userData,
    setUserData
  };
}

export {useLocationStorage}

