import React from "react";
import { Menu } from "@components/Menu";
import "@styles/HomePage.scss";
import { useLoaderData, useOutletContext, useParams } from "react-router-dom";
import { ProductCart } from "@components/ProductCart";
import { ProductDetail } from "../components/ProductDetail";

function HomePage(){

    const {
      username,
      productId,
      openDesktopMenu,
      showMobileMenu,
      openProductDetail,
      setProductId,
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
            <ProductDetail dataApi={dataApi} openProductDetail={openProductDetail}
             setOpenProductDetail={setOpenProductDetail} productId={productId} />
            <section className="main-container">
                <div className="cards-container">
                  {dataApi.map((product)=> <ProductCart key={product.id} product={product}
                  setOpenProductDetail={setOpenProductDetail} openProductDetail={openProductDetail}
                  setProductId={setProductId} />)}    
                </div>
            </section>
        </>
    )
}

async function productsData({params}){
  console.log("el parámetro", params)
  const slug = params.id ? `categories/${params.id}/products` : "products";
  console.log("el slug", slug)
  const res = await fetch(`https://api.escuelajs.co/api/v1/${slug}?offset=0&limit=10`);
  const data = await res.json();
  return data;
}

export {HomePage, productsData}

