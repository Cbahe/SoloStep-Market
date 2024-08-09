import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import App from "./pages/main";

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { path: '/main', element: <App /> },
      { path: '/signin', element: <SignIn /> },
      { path: '/signup', element: <SignUp /> },
    ],
  },
]);

function App() {
    return (
      <RouterProvider router={router}/>
    );
  }
  

export { App };