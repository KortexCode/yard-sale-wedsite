import React from 'react'

function useAuth(){
    //Estados
    const [username, setUsername] = React.useState(null);
    const [openDesktopMenu, setOpenDesktopMenu] = React.useState(false);
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);
    //Autenticar usuario
    function authUser(text){
        setUsername(text);
    }

    return [{
        username,
        openDesktopMenu,
        showMobileMenu,
        authUser,
        setOpenDesktopMenu,
        setShowMobileMenu,
    } ] 
    
}

export {useAuth}