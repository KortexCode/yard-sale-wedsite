import React from 'react'
import "@styles/MyOrders.scss";
import { PurchasedGeneralItems } from '@components/PurchasedGeneralItems';
import { MyOrder } from '../components/MyOrder';
import { useOutletContext } from 'react-router-dom';

function MyOrders() {

    const {
            orderList,
            setOrderList,
            openOrderMenu,
            setOpenOrderMenu,
    } = useOutletContext();
    
    console.log("las ordenes", orderList)
    return (
        <div className="my-order">
           {/*  <MyOrder/> */}
            <div className="my-order-container">
                <h1 className="title">My orders</h1>

                <div className="my-order-content">
                    <PurchasedGeneralItems/>
                    <PurchasedGeneralItems/>
                    <PurchasedGeneralItems/>
                    <PurchasedGeneralItems/>
                    <PurchasedGeneralItems/>
                    <PurchasedGeneralItems/>
                   
                </div>
            </div>
        </div>
    )
}

export {MyOrders}