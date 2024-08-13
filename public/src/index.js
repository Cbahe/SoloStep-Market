import React from "react";
import { createRoot } from 'react-dom/client';
import{ createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import { ShoeList } from "./pages/ShoeList";
import {App} from './App';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: "signin",
                element: <SignIn />,
            },
            {
                path: "signup",
                element: <SignUp />,
            },
            {
                path: "shoe",
                element: <ShoeList />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);