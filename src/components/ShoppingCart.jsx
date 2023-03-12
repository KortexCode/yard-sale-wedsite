import React from 'react'
import "@styles/ShoppingCart.scss";
import { ProductInShoppingCart } from './ProductInShoppingCart';

function ShoppingCart(props) {
    let totalPrice = 0;
    let articles= 0;
    //Se calcula el valor total de los productos en el carrito
    for (const product of props.shoppingList) {
        let price = product.price;
        articles++;
        totalPrice += price;
    }
    //EVENTOS DE CLICK
    const handleCloseMenu = () => {
        props.setOpenShoppingCart((prevstate) => !prevstate);
    }
    //Agrega las ordenes a la sección de My-Orders
    const handleAddtoOrders = () => {
        let saveOrderList = [...props.orderList]; 
    
        saveOrderList.push({
            id: Date.now().toString(16),
            totalPrice,
            articles,
            shoppingList:[...props.shoppingList],
            date: new Date().toLocaleDateString(),

        })
        props.setOrderList(saveOrderList);
        
    }
    console.log("lista", props.orderList)
    return (
        <aside className={`product-detail ${!props.openShoppingCart && "product-detail--disable"}`}>
            <div className="title-container">
                <img src="./icons/flechita.svg" alt="arrow" onClick={handleCloseMenu}/>
                <p className="title">My order</p>
            </div>

            <div className="my-order-content">
                {props.shoppingList.map((product)=><ProductInShoppingCart product={product} 
                shoppingList={props.shoppingList} setShoppingList={props.setShoppingList} key={product.id} />)}
            
                <div className="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>${totalPrice}</p>
                </div>

                <button className="primary-button" onClick={handleAddtoOrders}>
                    Checkout
                </button>
            </div>
        </aside >
    )
}

export { ShoppingCart };

