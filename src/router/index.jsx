import React from "react";
import { createHashRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Layout } from "../layout/LayoutPublic";
import { HomePage } from "@pages/HomePage";
import { LoginPage } from "@pages/LoginPage";
import { ErrorPage } from "@pages/ErrorPage";
import { LogIn } from "@routes/LogIn";
import { SignUp } from "@routes/SignUp";
import { CreateNewPassword } from "@routes/CreateNewPassword";
import { EmailSend } from "@routes/EmailSend";
import { MyOrders } from "@routes/MyOrders";
import { AccountPage } from "../pages/AccountPage";

const router = createHashRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>} errorElement={<ErrorPage/>} >
            <Route index={true} path="/" element={<HomePage/>}/>
            <Route path="/categories/:id/products" element={<HomePage/>}/>
            <Route path="/log-in" element={<LoginPage/>}>
                <Route index={true} path="/log-in" element={<LogIn/>}/>        
                <Route path="/log-in/create-new-password" element={<CreateNewPassword/>}/>
                <Route  path="/log-in/email-send" element={<EmailSend/>}/>
            </Route>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/my-orders" element={<MyOrders/>}/>
            <Route path="/my-account" element={<AccountPage/>}/>
        </Route>
    )
)

export {router}