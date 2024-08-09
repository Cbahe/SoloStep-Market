import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import SignUp from './pages/signup';
import SignIn from './pages/signin';


const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { path: '/', element: <App /> },
      { path: '/signin', element: <SignIn />, loader },
      { path: '/signup', element: <SignUp />, loader },
    ],
  },
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export { App };
