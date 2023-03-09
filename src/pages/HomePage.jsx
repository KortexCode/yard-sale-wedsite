import React from "react";
import { Menu } from "@components/Menu";
import "@styles/HomePage.scss";
import { useOutletContext } from "react-router-dom";
import { UserDesktopMenu } from "../components/UserDesktopMenu";

function HomePage(){

    const {
      username,
      openDesktopMenu,
      showMobileMenu,
      setShowMobileMenu,
      setOpenDesktopMenu,
      authUser,
    } = useOutletContext();
  
    return(
        <>
            <Menu username={username} openDesktopMenu={openDesktopMenu} 
              setOpenDesktopMenu={setOpenDesktopMenu} showMobileMenu={showMobileMenu}
              setShowMobileMenu={setShowMobileMenu} authUser={authUser}>
            </Menu>
            <section className="main-container">
                <div className="cards-container">
                  <div className="product-card">
                    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                    <div className="product-info">
                      <div>
                        <p>$120,00</p>
                        <p>Bike</p>
                      </div>
                      <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt=""/>
                      </figure>
                    </div>
                  </div>
                  <div className="product-card">
                    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                    <div className="product-info">
                      <div>
                        <p>$120,00</p>
                        <p>Bike</p>
                      </div>
                      <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt=""/>
                      </figure>
                    </div>
                  </div>
                  <div className="product-card">
                    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                    <div className="product-info">
                      <div>
                        <p>$120,00</p>
                        <p>Bike</p>
                      </div>
                      <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt=""/>
                      </figure>
                    </div>
                  </div>
                </div>
            </section>
        </>
    )
}

export {HomePage}