import React from "react";
import ReactDom from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import {router} from "./router/router";
import "./styles/global.css";
import "./styles/Login.scss";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router}/>
)




