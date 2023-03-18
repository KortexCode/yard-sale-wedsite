import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '@styles/UserMobileMenu.scss';
import { LinkItemMobile } from './LinkItemMobile';

function UserMobileMenu(props) {

    const handleLogout = () => {
        props.authUser(null);
        props.setOpenDesktopMenu(false)    
    }

    return (
        <div className={`mobile-menu ${!props.showMobileMenu && "mobile-menu--disable"}`}>
            <ul className='mobile-menu__categories'>
                <li className="mobile-menu__li">
                    <p className="mobile-menu__categories">CATEGORIES</p>
                </li>
                <li className="mobile-menu__li">
                    <NavLink className={({ isActive, isPending }) => isPending ? "mobile-menu__link" 
                    : isActive ? " mobile-menu__link--Actived" : "mobile-menu__link"} to="/">
                        All
                    </NavLink>
                </li>
                {props.navlink.map((item)=> <LinkItemMobile key={props.navlink.name} item={item}/>)}
            </ul>

            <ul>
                <li className="mobile-menu__li">
                    <Link to="/log-in" className="mobile-menu__link  email">{props.username || "Log in"}</Link>
                </li>
            </ul>
            {props.username && <ul>
                <li className="mobile-menu__li">
                    <Link className="mobile-menu__link" to="/my-orders">My orders</Link>
                </li>
                <li className="mobile-menu__li">
                    <Link className="mobile-menu__link" to="/my-account">My Profile</Link>
                </li>
                <li className="mobile-menu__li">
                    <Link className="mobile-menu__link sign-out" onClick={handleLogout}>Log out</Link>
                </li>
            </ul>}
        </div>
    )
}

export {UserMobileMenu}