import React from 'react'
import { PurchasedGeneralItems } from '@components/PurchasedGeneralItems';
import { MyOrder } from '@components/MyOrder';
import { PurchasedItems } from '@components/PurchasedItems';
import { Link, useOutletContext } from 'react-router-dom';
import arrowIcon from '@icons/flechita.svg';
import "@styles/MyOrders.scss";

function MyOrders() {

    const {
        orderList,
        orderListId,
        openOrderMenu,
        setOpenOrderMenu,
        setOrderListId,

    } = useOutletContext();

    return (
        <div className="my-orders">
           {openOrderMenu && <MyOrder orderList={orderList} orderListId={orderListId}
            setOpenOrderMenu={setOpenOrderMenu}>
                <PurchasedItems orderList={orderList} orderListId={orderListId} />
            </MyOrder>}
            <div className="my-orders-container">
                
                <div className='my-orders__title_container'>
                    <Link className='my-orders__link' to="/" ><img src={arrowIcon} alt="arrow"/></Link>
                    <h1 className="my-orders__title">My orders</h1>
                </div>

                <div className="my-orders-content">
                    {orderList?.map((order)=> <PurchasedGeneralItems key={order.id} order={order}  
                    openOrderMenu={openOrderMenu} setOpenOrderMenu={setOpenOrderMenu}
                    setOrderListId={setOrderListId}/>)}
                </div>
            </div>
        </div>
    )
}

export {MyOrders}