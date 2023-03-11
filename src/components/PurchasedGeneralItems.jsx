import React from 'react';
import "@styles/PurchasedGeneralItems.scss";
import { useNavigate } from 'react-router-dom';

function PurchasedGeneralItems() {
    const navigate = useNavigate();

    const handleOpenOrder= () => { 
        
    }

    return (
        <div className="order-general">
            <p>
                <span>03.25.21</span>
                <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <img src="./icons/flechita.svg" alt="arrow" onClick={handleOpenOrder}/>
        </div>
    )
}

export {PurchasedGeneralItems}