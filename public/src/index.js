import React, { Children } from "react";
import { createRoot } from 'react-dom/client';
import{ createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import { ShoeList } from "./pages/ShoeList";
import {App} from './App';

const router = createBrowserRouter([
    {
        path: '/',
        Element: <App/>,
        Children: [
            {
                path: "signin",
                Element: <SignIn />,
            },
            {
                path: "signup",
                Element: <SignUp />,
            }, {
                path: "sheo",
                Element: <ShoeList />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);