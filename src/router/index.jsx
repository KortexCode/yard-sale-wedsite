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
import { productsData } from "../pages/HomePage";


const router = createHashRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>} errorElement={<ErrorPage/>} >
            <Route index={true} path="/" loader={productsData} element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}>
                <Route index={true} path="/login" element={<LogIn/>}/>
                <Route path="/login/sign-up" element={<SignUp/>}/>
                <Route path="/login/create-new-password" element={<CreateNewPassword/>}/>
                <Route  path="/login/email-send" element={<EmailSend/>}/>
            </Route>
        </Route>
    )
)

export {router}