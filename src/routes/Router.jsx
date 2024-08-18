import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Root from "../layout/Root";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import NotFound from "../components/NotFound";


const router = createBrowserRouter([

    {
        path: '/',
        element: <Root></Root>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('data.JSON')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;