import React from 'react'

function useAuth(){
    //Estados
    const [username, setUsername] = React.useState(null);
    const [openDesktopMenu, setOpenDesktopMenu] = React.useState(false);
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);
    const [openProductDetail, setOpenProductDetail] = React.useState(false);
    //Autenticar usuario
    function authUser(text){
        setUsername(text);
    }

    return [{
        username,
        openDesktopMenu,
        showMobileMenu,
        openProductDetail,
        authUser,
        setOpenDesktopMenu,
        setShowMobileMenu,
        setOpenProductDetail,
    } ] 
    
}

export {useAuth}