import React from 'react'

function useAuth(){
    //ESTADOS
    //Datos de usuario
    const [username, setUsername] = React.useState(null);
    //Menus y Asides
    const [openDesktopMenu, setOpenDesktopMenu] = React.useState(false);
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);
    const [openProductDetail, setOpenProductDetail] = React.useState(false);
    const [openShoppingCart, setOpenShoppingCart] = React.useState(false);
    //Lista de productos y datos de productos
    const [orderList, setOrderList] = React.useState([]);
    const [productId, setProductId] = React.useState(null);
    //Autenticar usuario
    function authUser(text){
        setUsername(text);
    }

    return [{
        username,
        productId,
        openDesktopMenu,
        showMobileMenu,
        openProductDetail,
        openShoppingCart,
        orderList,
        authUser,
        setProductId,
        setOpenDesktopMenu,
        setShowMobileMenu,
        setOpenProductDetail,
        setOpenShoppingCart,
        setOrderList,
    } ] 
    
}

export {useAuth}