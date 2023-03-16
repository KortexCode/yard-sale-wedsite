import React from "react";
import { Menu } from "@components/Menu";
import "@styles/HomePage.scss";
import { useLoaderData, useOutletContext, useParams } from "react-router-dom";
import { ProductCart } from "@components/ProductCart";
import { ProductDetail } from "@components/ProductDetail";
import { ShoppingCart } from "@components/ShoppingCart";

function HomePage(){

    const {
      userData,
      username,
      productId,
      openDesktopMenu,
      showMobileMenu,
      openProductDetail,
      openShoppingCart,
      shoppingList,
      orderList,
      setProductId,
      setShowMobileMenu,
      setOpenDesktopMenu,
      setOpenProductDetail,
      setOpenShoppingCart,
      setShoppingList,
      setOrderList,
      addOrdersToUserList,
      authUser,
    } = useOutletContext();
    
    const dataApi = useLoaderData();
  
    return(
        <>
            <Menu username={username} openDesktopMenu={openDesktopMenu} 
              setOpenDesktopMenu={setOpenDesktopMenu} showMobileMenu={showMobileMenu}
              setShowMobileMenu={setShowMobileMenu} authUser={authUser} 
              setOpenShoppingCart={setOpenShoppingCart} shoppingList={shoppingList}
              openShoppingCart={openShoppingCart}>
            </Menu>
            <ProductDetail dataApi={dataApi} openProductDetail={openProductDetail}
             setOpenProductDetail={setOpenProductDetail} productId={productId} />
            <ShoppingCart username={username} dataApi={dataApi} openShoppingCart={openShoppingCart}
              setOpenShoppingCart={setOpenShoppingCart} setShoppingList={setShoppingList}
              shoppingList={shoppingList} setOrderList={setOrderList} 
              addOrdersToUserList={addOrdersToUserList}
              orderList={orderList} userData={userData} />
            <section className="main-container">
                <div className="cards-container">
                  {dataApi.map((product)=> <ProductCart key={product.id} product={product}
                  setOpenProductDetail={setOpenProductDetail} openProductDetail={openProductDetail}
                  setProductId={setProductId} setshoppingList={setShoppingList} shoppingList={shoppingList} />)}    
                </div>
            </section>
        </>
    )
}

async function productsData({params}){
  //El slug indicará en cual categoría de productos está buscando información
  const slug = params.id ? `categories/${params.id}/products` : "products";
  const res = await fetch(`https://api.escuelajs.co/api/v1/${slug}?offset=0&limit=10`);
  const data = await res.json();
  return data;
}

export {HomePage, productsData}

