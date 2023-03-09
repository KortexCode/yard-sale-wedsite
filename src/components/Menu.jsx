import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "@styles/Menu.scss";

function Menu(props){
    const navigate = useNavigate();

    const handleLogIn = ()=>{
      navigate("/login")
    } 
 
    return(
        <header>
            <nav>
                <img src="./icons/icon_menu.svg" alt="menu" className="menu"/>

                <div className="navbar-left">
                  <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"/>

                  <ul>
                    <li>
                      <NavLink to="/">All</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Clothes</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Electronics</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Furnitures</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Toys</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Others</NavLink>
                    </li>
                  </ul>
                </div>

                <div className="navbar-right">
                  <ul className='Menu-desktop'>
                    <li className="navbar-email Menu-login" onClick={handleLogIn}>{props.username || "LogIn"}</li>
                    <li className="navbar-shopping-cart">
                      <img src="./icons/icon_shopping_cart.svg" alt="shopping cart"/>
                      <div>2</div>
                    </li>
                  </ul>
                </div>
            </nav>
        </header>
    )
}

export {Menu}