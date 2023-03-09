import React from 'react'
import { Link } from 'react-router-dom'
import '@styles/UserMobileMenu.scss';

function UserMobileMenu(props) {

    return (
        <div className="mobile-menu">
            <ul>
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
                    <Link className="mobile-menu__link" to="/">Toys</Link>
                </li>
                <li className="mobile-menu__li">
                    <Link className="mobile-menu__link" to="/">Other</Link>
                </li>
            </ul>

            <ul>
                <li className="mobile-menu__li">
                    <Link to="/" className="mobile-menu__link  email">LogIn</Link>
                </li>
            </ul>
            <ul>
                <li className="mobile-menu__li">
                    <Link className="mobile-menu__link" to="/">My orders</Link>
                </li>
                <li className="mobile-menu__li">
                    <Link className="mobile-menu__link" to="/">My Profile</Link>
                </li>
                <li className="mobile-menu__li">
                    <Link className="mobile-menu__link sign-out" to="/">Log out out</Link>
                </li>
            </ul>
        </div>
    )
}

export {UserMobileMenu}