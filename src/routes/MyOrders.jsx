import React from 'react'
import "@styles/MyOrders.scss";
import { PurchasedGeneralItems } from '@components/PurchasedGeneralItems';
import { MyOrder } from '@components/MyOrder';
import { PurchasedItems } from '@components/PurchasedItems';
import { useOutletContext } from 'react-router-dom';

function MyOrders() {

    const {
        orderList,
        orderListId,
        openOrderMenu,
        setOrderList,
        setOpenOrderMenu,
        setOrderListId,

    } = useOutletContext();

    return (
        <div className="my-order">
           {openOrderMenu && <MyOrder orderList={orderList} orderListId={orderListId}>
                <PurchasedItems orderList={orderList} orderListId={orderListId}/>
            </MyOrder>}
            <div className="my-order-container">
                <h1 className="title">My orders</h1>

                <div className="my-order-content">
                    {orderList.map((order)=> <PurchasedGeneralItems key={order.id} order={order}  
                    openOrderMenu={openOrderMenu} setOpenOrderMenu={setOpenOrderMenu}
                    setOrderListId={setOrderListId} setOrderList={setOrderList} />)}
                </div>
            </div>
        </div>
    )
}

export {MyOrders}