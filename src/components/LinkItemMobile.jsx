import React from 'react'
import { NavLink } from 'react-router-dom'

function LinkItemMobile({item}){
    
    return(
        <li className='mobile-menu__li'>
            <NavLink className={({ isActive, isPending }) => isPending ? "mobile-menu__link" 
                    : isActive ? "mobile-menu__link--Actived" : "mobile-menu__link"} to={item.to}
            >
                {item.name}
            </NavLink>
        </li>
    )

}

export {LinkItemMobile}