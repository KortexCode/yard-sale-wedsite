import React from 'react'
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
    function authUser(text){
        setUserName(text);
    }
    //Registrar usuario
    function userSignUp(data){
        const userList = [...userData];
        userList.push(data);
        console.log("entré a signup");
        setUserData(userList);
        localStorage.setItem("item_V1", JSON.stringify(userList));    
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
        setOrderListId,
        setOpenOrderMenu,
        userSignUp,
    } ] 
    
}

export {useAuth}