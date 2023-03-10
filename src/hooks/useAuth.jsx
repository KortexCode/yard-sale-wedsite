import React from 'react'

function useAuth(){
    //ESTADOS
    //Datos de usuario
    const [username, setUsername] = React.useState(null);
    //Menus y Asides
    const [openDesktopMenu, setOpenDesktopMenu] = React.useState(false);
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);
    const [openProductDetail, setOpenProductDetail] = React.useState(false);
    //Datos de productos
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
        authUser,
        setProductId,
        setOpenDesktopMenu,
        setShowMobileMenu,
        setOpenProductDetail,
    } ] 
    
}

export {useAuth}