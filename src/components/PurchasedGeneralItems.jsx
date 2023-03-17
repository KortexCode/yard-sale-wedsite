import React from 'react';
import arrowIcon from '@icons/flechita.svg';
import "@styles/PurchasedGeneralItems.scss";

function PurchasedGeneralItems({order, setOpenOrderMenu, setOrderListId}) {
  
    const handleOpenOrder= () => { 
        setOpenOrderMenu(true);
        setOrderListId(order.id);
        
    }

    return (
        <div className="orders-general">
            <p>
                <span>{order.date}</span>
                <span>{`${order.articles} articles`}</span>
            </p>
            <p>{`$${order.totalPrice}`}</p>
            <img src={arrowIcon} alt="arrow" onClick={handleOpenOrder}/>
        </div>
    )
}

export {PurchasedGeneralItems}