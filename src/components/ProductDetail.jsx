import React from 'react'
import "@styles/ProductDetail.scss";

function ProductDetail(props) {
    const handleCloseAside = () => {
        props.setOpenProductDetail(false);
    }
    const data = props.dataApi.find((product)=>{
        return product.id === props.productId;
    })
    
    return (
        <aside className={`product-detail ${!props.openProductDetail && "product-detail--disabled"}`}>
            <div className="product-detail-close">
                <img src="./icons/icon_close.png" alt="close" onClick={handleCloseAside}/>
            </div>
            <img src={data?.images[0]} alt={data?.title}/>
                <div className="product-info">
                    <p>${data?.price}</p>
                    <p>{data?.title}</p>
                    <p>{data?.description}</p>
                    <button className="primary-button add-to-cart-button">
                        <img src="./icons/bt_add_to_cart.svg" alt="add to cart"/>
                            Add to cart
                    </button>
                </div>
        </aside>
    )
}

export { ProductDetail }