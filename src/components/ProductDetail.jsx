import React from 'react';
import closeIcon from '@icons/icon_close.png';
import btnAddToCartIcon from '@icons/bt_add_to_cart.svg';
import "@styles/ProductDetail.scss";

function ProductDetail(props) {
    const handleCloseAside = () => {
        props.setOpenProductDetail(false);
    }
    const data = props.dataApi?.find((product)=>{
        return product.id === props.productId;
    })
    //Agregar al carrito de compras
    const handleAddToShoppingCart = () => { 
        let productList = [...props.shoppingList];
        productList.push(data);
        props.setShoppingList(productList)
    }
    
    return (
        <aside className={`Product-Detail ${!props.openProductDetail && "product-detail--disabled"}`}>
            <div className="product-detail-close" onClick={handleCloseAside}>
                <img src={closeIcon} alt="close"/>
            </div>
            <img src={data?.images[0]} alt={data?.title}/>
                <div className="Product-Detail__product-info">
                    <p>${data?.price}</p>
                    <p>{data?.title}</p>
                    <p>{data?.description}</p>
                    <button className="primary-button add-to-cart-button" 
                        onClick={handleAddToShoppingCart}>
                        <img src={btnAddToCartIcon} alt="add to cart"/>
                            Add to cart
                    </button>
                </div>
        </aside>
    )
}

export { ProductDetail }