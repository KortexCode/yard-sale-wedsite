import React from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

function Layout(){
    const [auth] = useAuth();
    return(
        <Outlet context={auth}/>     
    )
}

export {Layout}