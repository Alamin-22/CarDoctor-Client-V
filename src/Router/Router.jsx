import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LOgins/Singin/Login";
import Register from "../Pages/LOgins/Register/Register";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Error from "../Pages/Error/Error";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/checkout/:id",
                element: <PrivateRoute><CheckOut /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: "/bookings",
                element: <PrivateRoute><Bookings /></PrivateRoute>,
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }

        ]
    },
]);


export default router;