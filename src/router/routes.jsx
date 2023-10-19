import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Product from "../components/product/Product";
import Details from "../pages/Details/Details";
import UpdateProduct from "../pages/updateProduct/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/brands/:brandName",
        element: <Product />,
      },
      {
        path: "/products/:brandName/:id",
        element: <Details />,
      },
      {
        path: "/products/update/:id",
        element:<UpdateProduct/>
      },
    ],
  },
]);

export default router;
