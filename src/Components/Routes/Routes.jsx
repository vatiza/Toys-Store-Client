import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Accounts/Login/Login";
import Signup from "../Pages/Accounts/Login/Signup";
import DetailsToys from "../Pages/DetailsToys/DetailsToys";
import PrivateRoutes from "./PrivateRoutes";
import Orders from "../Pages/Orders/Orders";
import Blogs from "../Pages/Blogs/Blogs";
import MyOrders from "../Pages/MyOrdersList/MyOrders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            <DetailsToys></DetailsToys>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://toys-store-js-server.vercel.app/toys/${params.id}`),
      },
      {
        path: "/orders/:id",
        element: (
          <PrivateRoutes>
            <Orders></Orders>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://toys-store-js-server.vercel.app/toys/${params.id}`),
      },
      {
        path: "/myorders",
        element: (
          <PrivateRoutes>
            <MyOrders></MyOrders>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
export default router;
