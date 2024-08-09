const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { path: '/', element: <App /> },
      { path: '/signin', element: <SignIn /> },
      { path: '/signup', element: <SignUp /> },
    ],
  },
]);

