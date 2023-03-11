import React from 'react';
import "@styles/MyOrder.scss";
import { PurchasedItems } from './PurchasedItems';

function MyOrder(props) {

    return (
        <div className="my-order">
            <div className="my-order-container">
                <h1 className="title">My order</h1>

                <div className="my-order-content">
                    <PurchasedItems/>
                </div>
            </div>
        </div>
    )
}
export { MyOrder }