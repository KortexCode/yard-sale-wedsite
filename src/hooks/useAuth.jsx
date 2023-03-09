import React from 'react'

function useAuth(){

    const [username, setUsername] = React.useState(null);

    function authUser(text){
        setUsername(text);
    }

    return [{
        username,
        authUser,
    } ] 
    
}

export {useAuth}