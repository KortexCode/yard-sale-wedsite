import React, { useEffect } from 'react';
import addToCartIcon from '@icons/bt_add_to_cart.svg';
import imgNotFound from '@logos/imgNotFound.png';
import '@styles/ProductCart.scss';
import { useObserver } from '../hooks/useObserver';

function ProductCart({
    product, 
    setOpenProductDetail,
    openProductDetail, 
    shoppingList,
    setProductId,
    setshoppingList,

}){
    const observer = useObserver(product, imgNotFound);  
  
    useEffect(()=>{
        const imgProduct = document.getElementById(product.id)
        observer.observe(imgProduct)
    })
    //EVENTOS DE CLICK
    //Abrir detalles del producto
    const handleOpenDetails = () => { 
        if(!openProductDetail)
            setOpenProductDetail(true);
            setProductId(product.id);
    }
    //Agregar al carrito de compras
    const handleAddToShoppingCart = () => { 
        let productList = [...shoppingList];
        productList.push(product);
        setshoppingList(productList)
    }
    return (
        <div className="product-card">
            <img id={product.id} src="" alt="" onClick={handleOpenDetails}/>
            <div className="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure>
                    <img src={addToCartIcon} alt="add to cart icon"
                        onClick={handleAddToShoppingCart}/>
                </figure>
            </div>
        </div>
    )

}

export { ProductCart }