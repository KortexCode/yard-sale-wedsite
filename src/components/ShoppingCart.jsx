import React from 'react'
import "@styles/ShoppingCart.scss";
import { ProductInShoppingCart } from './ProductInShoppingCart';

function ShoppingCart(props) {
    let price = 0;
    let result = 0;
    //Se calcula el valor total de los productos en el carrito
    for (const product of props.orderList) {
         price = product.price;
         result += price;
    }

    return (
        <aside className={`product-detail ${!props.openShoppingCart && "product-detail--disable"}`}>
            <div className="title-container">
                <img src="./icons/flechita.svg" alt="arrow"/>
                <p className="title">My order</p>
            </div>

            <div className="my-order-content">
                {props.orderList.map((product)=><ProductInShoppingCart product={product} 
                orderList={props.orderList} setOrderList={props.setOrderList} key={product.id} />)}
            
                <div className="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>${result}</p>
                </div>

                <button className="primary-button">
                    Checkout
                </button>
            </div>
        </aside >
    )
}

export { ShoppingCart };

