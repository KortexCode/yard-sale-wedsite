import React from 'react'
import { NavLink } from 'react-router-dom'

function LinkItem({item}){
    
    return(
        <li className='Menu-li'>
            <NavLink className={({ isActive, isPending }) => isPending ? "Menu-navLink" 
                    : isActive ? " Menu-navLinkActived" : "Menu-navLink"} to={item.to}
            >
                {item.name}
            </NavLink>
        </li>
    )

}

export {LinkItem}