import React from 'react';
import '@styles/ProductCart.scss';

function ProductCart({
        product, 
        setOpenProductDetail,
        openProductDetail, 
        orderList,
        setProductId,
        setOrderList,

    }) {
    //EVENTOS DE CLICK
    //Abrir detalles del producto
    const handleOpenDetails = () => { 
        if(!openProductDetail)
            setOpenProductDetail(true);
            setProductId(product.id);
    }
    //Agregar al carrito de compras
    const handleAddToShoppingCart = () => { 
        let productList = [...orderList];
        productList.push(product);
        setOrderList(productList)
    }

    return (
        <div className="product-card">
            <img src={`${product.images[0]}`} alt={`${product.title}`} 
                onClick={handleOpenDetails}/>
            <div className="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure>
                    <img src="./icons/bt_add_to_cart.svg" alt="add to cart icon"
                        onClick={handleAddToShoppingCart}/>
                </figure>
            </div>
        </div>
    )

}

export { ProductCart }