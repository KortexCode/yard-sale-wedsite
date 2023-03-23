import React from 'react'

function useLocationStorage(initialItem, item){

  const initialState = {
    username: null,
    password: null,
    email: null,
    orderList: [],
  }

  //Datos de usuario
  const [userData, setUserData] = React.useState(null);

  //Cuando la apalicación de inicia por primera vez:
  React.useEffect(()=>{

    const dataInLocalstorage = localStorage.getItem(item);
    if(!dataInLocalstorage){
      localStorage.setItem(item, JSON.stringify(initialItem));
    }else{
      setUserData(JSON.parse(dataInLocalstorage))
    }

  },[])
  
    
  return {
    userData,
    setUserData
  };
}

export {useLocationStorage}

