import React from "react";
import { createHashRouter, createRoutesFromElements, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { Layout } from "../layout/LayoutPublic";
import { HomePage } from "../pages/HomePage";
import { LogIn } from "../routes/LogIn";
import { SignUp } from "../routes/SignUp";
import { CreateNewPassword } from "../routes/CreateNewPassword";
import { EmailSend } from "../routes/EmailSend";
import { ErroPage } from "../routes/ErrorPage";

const router = createHashRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>} errorElement={<ErroPage/>} >
            <Route index={true} path="/" element={<HomePage/>}/>
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