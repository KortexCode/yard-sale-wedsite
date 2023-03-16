import React, { useEffect } from 'react'
import { useLocationStorage } from './useLocationStorage';

function useAuth(){

    const {userData, setUserData} = useLocationStorage([], "item_V1");
 
    //ESTADOS
    const [username, setUserName] = React.useState(null);
    //Menus y Asides
    const [openDesktopMenu, setOpenDesktopMenu] = React.useState(false);
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);
    const [openProductDetail, setOpenProductDetail] = React.useState(false);
    const [openShoppingCart, setOpenShoppingCart] = React.useState(false);
    const [openOrderMenu, setOpenOrderMenu] = React.useState(false);
    //Lista de productos y datos de productos
    const [shoppingList, setShoppingList] = React.useState([]);
    const [productId, setProductId] = React.useState(null);
    const [orderList, setOrderList] = React.useState([]);
    const [orderListId, setOrderListId] = React.useState(null);
    //Autenticar usuario
    function authUser(user_name){
        if(!user_name){//Cuando se haga logout
            setUserName(null);
            return;
        }else{
            let userListInDataBase = [...userData];
            //Se busca el usuario actualmente logueado
            const userlogued = userListInDataBase.find((user)=>{
                return user_name === user.name
            
            });
            console.log(userlogued?.ordersList)
            setOrderList(userlogued?.ordersList);
            setUserName(user_name);
        }    
    }
    //Registrar usuario
    function userSignUp(data){
        const userList = [...userData];
        userList.push(data);
        setUserData(userList);
        localStorage.setItem("item_V1", JSON.stringify(userList));    
    }
    function addOrdersToUserList(newOrder){
        //se extrae lista de usuarios de la base de datos
        let userListInDataBase = [...userData];
        //Se busca el usuario actualmente logueado
        userListInDataBase = userListInDataBase.map((user)=>{
            if(username === user.name){
                //Se agrega la nueva orden a la lista de ordenes del usuario logueado
                user.ordersList.push(newOrder);
                setOrderList([...user.ordersList]);
            };
            return user;//se retornan todos los usuarios
        })
        //Se actualizan los datos de usuario registrados; 
        setUserData(userListInDataBase)
        localStorage.setItem("item_V1", JSON.stringify(userListInDataBase));  
    }
    function changePassword(userEmail, newPassword){
        //se extrae lista de usuarios de la base de datos
        let userListInDataBase = [...userData];
        //Se busca el usuario actualmente logueado
        userListInDataBase = userListInDataBase.map((user)=>{
          if(userEmail === user.email){
            console.log("cambio la contraseña")
            user.password = newPassword;
          }
          return user;
        });
        console.log("nueva database", userListInDataBase)
        setUserData(userListInDataBase);
        localStorage.setItem("item_V1", JSON.stringify(userListInDataBase)); 

    }
    return [{
        userData,
        username,
        productId,
        openDesktopMenu,
        showMobileMenu,
        openProductDetail,
        openShoppingCart,
        shoppingList,
        orderList,
        orderListId,
        openOrderMenu,
        authUser,
        setProductId,
        setOpenDesktopMenu,
        setShowMobileMenu,
        setOpenProductDetail,
        setOpenShoppingCart,
        setShoppingList,
        setOrderList,
        addOrdersToUserList,
        setOrderListId,
        setOpenOrderMenu,
        userSignUp,
        changePassword,
    } ] 
    
}

export {useAuth}