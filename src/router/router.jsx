import React from "react";
import { createHashRouter, createRoutesFromElements, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { Layout } from "../layout/LayoutPublic";
import { HomePage } from "../pages/HomePage";
import { LogIn } from "../components/LogIn";
import { SignUp } from "../components/SignUp";
import { EmailSend } from "../components/EmailSend";

const router = createHashRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>} errorElement>
            <Route index={true} path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}>
                <Route index={true} path="/login" element={<LogIn/>}/>
                <Route path="/login/sign-up" element={<SignUp/>}/>
                {/* <Route  path="/login/email-send" element={<EmailSend/>}/> */}
            </Route>
        </Route>
    )
)

export {router}