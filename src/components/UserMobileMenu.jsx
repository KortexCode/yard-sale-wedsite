import React from 'react'
import { Link } from 'react-router-dom'
import '@styles/UserMobileMenu.scss';

function UserMobileMenu(props) {

    const handleLogout = () => {
        props.authUser(null);
        props.setOpenDesktopMenu(false)    
    }

    return (
        <div className={`mobile-menu ${!props.showMobileMenu && "mobile-menu--disable"}`}>
            <ul className='mobile-menu__categories'>
                <li className="mobile-menu__li">
                    <p className="mobile-menu__link">CATEGORIES</p>
                </li>
                <li className="mobile-menu__li">
                    <Link className="mobile-menu__link" to="/">All</Link>
                </li>
                <li className="mobile-menu__li">
                    <Link className="mobile-menu__link" to="/categories/1/products">Clothes</Link>
                </li>
                <li className="mobile-menu__li">
                    <Link className="mobile-menu__link" to="/categories/2/products">Electronics</Link>
                </li>
                <li className="mobile-menu__li">
                    <Link className="mobile-menu__link" to="/categories/3/products">Furnitures</Link>
                </li>
                <li className="mobile-menu__li">
                    <Link className="mobile-menu__link" to="/categories/4/products">Shoes</Link>
                </li>
                <li className="mobile-menu__li">
                    <Link className="mobile-menu__link" to="/categories/5/products">Other</Link>
                </li>
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