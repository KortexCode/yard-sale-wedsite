import React from 'react'
import { Link } from 'react-router-dom'
import '@styles/UserMobileMenu.scss';

function UserMobileMenu(props) {

    const handleLogout = () => {
        props.authUser(null);    
    }

    return (
        <div className={`mobile-menu ${!props.showMobileMenu && "mobile-menu--disable"}`}>
            <ul className='mobile-menu__categories'>
                <li className="mobile-menu__li">
                    <Link className="mobile-menu__link" to="/">CATEGORIES</Link>
                </li>
                <li className="mobile-menu__li">
                    <Link className="mobile-menu__link" to="/">All</Link>
                </li>
                <li className="mobile-menu__li">
                    <Link className="mobile-menu__link" to="/">Clothes</Link>
                </li>
                <li className="mobile-menu__li">
                    <Link className="mobile-menu__link" to="/">Electronics</Link>
                </li>
                <li className="mobile-menu__li">
                    <Link className="mobile-menu__link" to="/">Furnitures</Link>
                </li>
                <li className="mobile-menu__li">
                    <Link className="mobile-menu__link" to="/">Shoes</Link>
                </li>
                <li className="mobile-menu__li">
                    <Link className="mobile-menu__link" to="/">Other</Link>
                </li>
            </ul>

            <ul>
                <li className="mobile-menu__li">
                    <Link to="/login" className="mobile-menu__link  email">{props.username || "Log in"}</Link>
                </li>
            </ul>
            {props.username && <ul>
                <li className="mobile-menu__li">
                    <Link className="mobile-menu__link" to="/my-orders" target={"_blank"}>My orders</Link>
                </li>
                <li className="mobile-menu__li">
                    <Link className="mobile-menu__link" to="/">My Profile</Link>
                </li>
                <li className="mobile-menu__li">
                    <Link className="mobile-menu__link sign-out" onClick={handleLogout}>Log out</Link>
                </li>
            </ul>}
        </div>
    )
}

export {UserMobileMenu}