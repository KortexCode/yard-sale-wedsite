import React from 'react'
import { useOutletContext } from 'react-router-dom';

function AccountPage() {

    const {userData, username} = useOutletContext();
    let userlogued = {};
    if(username){
        let userListInDataBase = [...userData];
        //Se busca el usuario actualmente logueado
        userlogued = userListInDataBase.find((user)=>{
            return username === user.name
    
        });
    }
    const {name, email, ordersList} = userlogued;

    return (
        <div className="login">
            <div className="form-container">
                <h1 className="title">My account</h1>

                <form action="/" className="form">
                    <div>
                        <label htmlFor="name" className="label">Name</label>
                        <p className="value">{name}</p>

                        <label htmlFor="email" className="label">Email</label>
                        <p className="value">{email}</p>

                        <label htmlFor="password" className="label">Orders</label>
                        <p className="value">{ordersList.length}</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export {AccountPage}