import React from "react";
import { createHashRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Login } from "../components/Login";
import { Layout } from "../layout/LayoutPublic";
import { HomePage } from "../pages/HomePage";

const router = createHashRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>} errorElement>
            <Route index={true} path="/" element={<HomePage/>}/>
            <Route path="/login" element={<Login/>}/>
        </Route>
            
       
    )
)

export {router}