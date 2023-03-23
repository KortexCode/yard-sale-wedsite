import React, { useEffect } from "react";
import { Menu } from "@components/Menu";
import "@styles/HomePage.scss";
import { defer, useLoaderData, useOutletContext, useParams } from "react-router-dom";
import { ProductCart } from "@components/ProductCart";
import { ProductDetail } from "@components/ProductDetail";
import { ShoppingCart } from "@components/ShoppingCart";
import { usePagination } from "../hooks/usePagination";

function HomePage(){

  const {
    userData,
    username,
    openDesktopMenu,
    showMobileMenu,
    openProductDetail,
    openShoppingCart,
    shoppingList,
    orderList,
    productId,
    loading,
    setProductId,
    setShowMobileMenu,
    setOpenDesktopMenu,
    setOpenProductDetail,
    setOpenShoppingCart,
    setShoppingList,
    setOrderList,
    setLoading,
    addOrdersToUserList,
    authUser,
  } = useOutletContext();
  const [dataApi, setDataApi] = React.useState([]);//Estado donde se guardan datos de la Api
  const [category, setCategory] = React.useState(null);
  const {id}= useParams();//Obtenemos parámetro id de las categorías
  const {pagination, setPagination} = usePagination();//Obtenemos datos de la paginación 
  const {limit} = {...pagination};//Elementos de la paginación
  //Este use effect genera la consulta a la Api cada vez que hayan cambios en la
  //paginación o el id de navegación.
  useEffect(()=>{
    if(id != category){//Al cambiar la categoría reiniciará el scroll, paginación y categoría
      setPagination({...pagination, ...{limit: 10}});
      setCategory(id);
      window.scrollTo(0, 0);
      return;
    }
    if(limit > 50){//Si se pasa de la página 50 no hará la consulta
      return
    }
  
    async function productsData(){
      
      //El slug indicará en cual categoría de productos está buscando información
      const slug = id ? `categories/${id}/products` : "products";
      const res = await fetch(`https://api.escuelajs.co/api/v1/${slug}?offset=0&limit=${limit}`);
      const loaderData = await res.json();
      if(!loaderData.length){
        return;
      }
      if(loading){
        setLoading(false);
      }
      setCategory(id);
      setDataApi(loaderData);
    }
    productsData();
      
  }, [pagination, id]); 

    return(
        <>
            <Menu username={username} openDesktopMenu={openDesktopMenu} 
              setOpenDesktopMenu={setOpenDesktopMenu} showMobileMenu={showMobileMenu}
              setShowMobileMenu={setShowMobileMenu} authUser={authUser} 
              setOpenShoppingCart={setOpenShoppingCart} shoppingList={shoppingList}
              openShoppingCart={openShoppingCart} setOpenProductDetail={setOpenProductDetail}>
            </Menu>
            <ProductDetail dataApi={dataApi} openProductDetail={openProductDetail}
             setOpenProductDetail={setOpenProductDetail} productId={productId}
             shoppingList={shoppingList} setShoppingList={setShoppingList}/>
            <ShoppingCart username={username} dataApi={dataApi} openShoppingCart={openShoppingCart}
              setOpenShoppingCart={setOpenShoppingCart} setShoppingList={setShoppingList}
              shoppingList={shoppingList} setOrderList={setOrderList} 
              addOrdersToUserList={addOrdersToUserList} 
              orderList={orderList} userData={userData} />
            <section className="main-container">
                <div className="cards-container">
                  {loading && <div className="skeleton--loading"></div>}
                  {loading && <div className="skeleton--loading"></div>}
                  {loading && <div className="skeleton--loading"></div>}
                  {loading && <div className="skeleton--loading"></div>}
                  {loading && <div className="skeleton--loading"></div>}
                  {loading && <div className="skeleton--loading"></div>}
                  {loading && <div className="skeleton--loading"></div>}

                  {!loading && dataApi?.map((product)=> <ProductCart key={product.id}
                  product={product}
                  setOpenProductDetail={setOpenProductDetail} 
                  openProductDetail={openProductDetail}
                  setProductId={setProductId} setshoppingList={setShoppingList}
                  shoppingList={shoppingList} />)}
                          
                </div>
            </section>
        </>
    )
}

export {HomePage}

