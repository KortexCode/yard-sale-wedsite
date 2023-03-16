import React from 'react'
import { ProductInShoppingCart } from './ProductInShoppingCart';
import { useNavigate } from 'react-router-dom';
import arrowIcon from '@icons/flechita.svg';
import "@styles/ShoppingCart.scss";

function ShoppingCart(props) {
    const navigate = useNavigate();
    let totalPrice = 0;
    let articles= 0;
    //Se calcula el valor total de los productos en el carrito y su cantidad
    for (const product of props.shoppingList) {
        let price = product.price;
        articles++;
        totalPrice += price;
    }
    //EVENTOS DE CLICK
    //Cierre de menu
    const handleCloseMenu = () => {
        props.setOpenShoppingCart((prevstate) => !prevstate);
    }
    //Agrega las ordenes a la base de datos del usuario logueado
    const handleAddtoOrders = () => {
        if(!props.username){
            navigate("/log-in");
        }
        else{
            const newOrder = {//Objeto que contiene la información de la orden
                id: Date.now().toString(16),
                totalPrice,
                articles,
                shoppingList:[...props.shoppingList],
                date: new Date().toLocaleDateString(),
            }
            props.addOrdersToUserList(newOrder);  
        }
    }
    return (
        <aside className={`product-detail ${!props.openShoppingCart && "product-detail--disable"}`}>
            <div className="title-container">
                <img src={arrowIcon} alt="arrow" onClick={handleCloseMenu} className="shopping-cart__arrow_close"/>
                <p className="title">My order</p>
            </div>

            <div className="my-order-content">
                <div className='shopping-cart-container'>
                    {props.shoppingList.map((product)=><ProductInShoppingCart product={product} 
                    shoppingList={props.shoppingList} setShoppingList={props.setShoppingList} key={product.id} />)}
                </div>
            
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

