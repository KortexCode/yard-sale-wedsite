import React from 'react';
import "@styles/PurchasedItems.scss";

function PurchasedItems(props) {

    //Se busca la orden por su id
    const order = props.orderList.find((productList)=>{
        return props.orderListId === productList.id;
    })
    //Se obtiene la lista de productos de la orden
    const productList = [...order.shoppingList];

   return (
        <>
            {productList.map((product)=>(
                <div className="shopping-cart" key={product.id}>
                    <figure>
                        <img src={product.images[0]} alt={product.title}/>
                    </figure>
                    <p>{product.title}</p>
                    <p>${product.price}</p>
                </div>      
            ))}
        </>   
   )
 
}

export { PurchasedItems }