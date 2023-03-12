import React from 'react';
import "@styles/PurchasedGeneralItems.scss";

function PurchasedGeneralItems({order, setOpenOrderMenu, setOrderListId}) {
  
    const handleOpenOrder= () => { 
        setOpenOrderMenu(true);
        setOrderListId(order.id);
        
    }

    return (
        <div className="order-general">
            <p>
                <span>{order.date}</span>
                <span>{`${order.articles} articles`}</span>
            </p>
            <p>{`$${order.totalPrice}`}</p>
            <img src="./icons/flechita.svg" alt="arrow" onClick={handleOpenOrder}/>
        </div>
    )
}

export {PurchasedGeneralItems}