import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserDesktopMenu } from './UserDesktopMenu';
import { UserMobileMenu  } from './UserMobileMenu';
import "@styles/Menu.scss";

function Menu(props){
    const navigate = useNavigate();

    const handleLogIn = ()=>{
      if(props.username && !props.openDesktopMenu){
        console.log("abro menu")
        props.setOpenDesktopMenu(true);
      }
      else if(props.username && props.openDesktopMenu){
        console.log("cierro menu")
        props.setOpenDesktopMenu(false);
      }
      else
        navigate("/login")
    }
    const handleOpenMobileMenu = () => {
      if(!props.showMobileMenu){
        props.setShowMobileMenu(true);
      }
      else
        props.setShowMobileMenu(false);   
    }
    console.log("abri el menu!!", props.openDesktopMenu);
    //Cierre de Menu de usuario en desktop
 
    return(
        <header>
            <nav>
                <img src="./icons/icon_menu.svg" alt="menu" className="menu"
                 onClick={handleOpenMobileMenu}/>
                
                <UserMobileMenu username={props.username}
                authUser={props.authUser} setShowMobileMenu={props.setShowMobileMenu}
                showMobileMenu={props.showMobileMenu}/>
                 
                <div className="navbar-left">
                  <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"/>

                  <ul className='Menu-ul'>
                    <li className='Menu-li'>
                      <NavLink className='Menu-navLink' to="/">All</NavLink>
                    </li>
                    <li className='Menu-li'>
                      <NavLink className='Menu-navLink' to="/">Clothes</NavLink>
                    </li>
                    <li className='Menu-li'>
                      <NavLink className='Menu-navLink' to="/">Electronics</NavLink>
                    </li>
                    <li className='Menu-li'>
                      <NavLink className='Menu-navLink' to="/">Furnitures</NavLink>
                    </li>
                    <li className='Menu-li'>
                      <NavLink className='Menu-navLink' to="/">Toys</NavLink>
                    </li>
                    <li className='Menu-li'>
                      <NavLink className='Menu-navLink' to="/">Others</NavLink>
                    </li>
                  </ul>
                </div>

                <div className="navbar-right">
                  <ul className='Menu-desktop Menu-ul'>
                    <li className="navbar-email Menu-login" onClick={handleLogIn}>{props.username || "LogIn"}</li>
                    <li className="navbar-shopping-cart">
                      <img src="./icons/icon_shopping_cart.svg" alt="shopping cart"/>
                      <div>2</div>
                    </li>
                  </ul>
                  <UserDesktopMenu authUser={props.authUser}
                   setOpenDesktopMenu={props.setOpenDesktopMenu} openDesktopMenu={props.openDesktopMenu} />
                </div>
            </nav>
        </header>
    )
}

export {Menu}