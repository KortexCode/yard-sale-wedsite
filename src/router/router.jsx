import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <p>Hola chikorita!!</p>
        </Route>
    )
)

export {router}