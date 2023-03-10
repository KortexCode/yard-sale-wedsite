import React from "react";
import { Menu } from "@components/Menu";
import "@styles/HomePage.scss";
import { useLoaderData, useOutletContext } from "react-router-dom";
import { ProductCart } from "@components/ProductCart";
import { ProductDetail } from "../components/ProductDetail";

function HomePage(){

    const {
      username,
      openDesktopMenu,
      showMobileMenu,
      openProductDetail,
      setShowMobileMenu,
      setOpenDesktopMenu,
      setOpenProductDetail,
      authUser,
    } = useOutletContext();
    const dataApi = useLoaderData();
  
    return(
        <>
            <Menu username={username} openDesktopMenu={openDesktopMenu} 
              setOpenDesktopMenu={setOpenDesktopMenu} showMobileMenu={showMobileMenu}
              setShowMobileMenu={setShowMobileMenu} authUser={authUser}>
            </Menu>
            <ProductDetail openProductDetail={openProductDetail} setOpenProductDetail={setOpenProductDetail}/>
            <section className="main-container">
                <div className="cards-container">
                  {dataApi.map((product)=> <ProductCart key={product.id} product={product}
                  setOpenProductDetail={setOpenProductDetail} openProductDetail={openProductDetail}/>)}    
                </div>
            </section>
        </>
    )
}

async function productsData(){
  const res = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10");
  const data = await res.json();
  return data;
}

export {HomePage, productsData}

