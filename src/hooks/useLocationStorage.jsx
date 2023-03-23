import React from 'react'

function useLocationStorage(initialItem, item){

  //Datos de usuario
  const [userData, setUserData] = React.useState(initialItem);

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

