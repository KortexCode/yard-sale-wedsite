import React from 'react';
import "@styles/MyOrder.scss";

function MyOrder({children, orderList, orderListId}) {
    //Se busca la orden por su id
    const order = orderList.find((productList)=>{
        return orderListId === productList.id;
    })
    return (
        <div className="my-order">
            <div className="my-order-container">
                <h1 className="title">My order</h1>
                <div class="order">
                    <p>
                      <span>{order.date}</span>
                      <span>{`${order.articles} articles`}</span>
                    </p>
                    <p>{`$${order.totalPrice}`}</p>
                </div>
                <div className="my-order-content">
                    {children}
                </div>
            </div>
        </div>
    )
}
export { MyOrder }