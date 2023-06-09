import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home";
import About from "../components/About";
import ErrorPage from "../components/ErrorPage";
import Shop from "../components/Shop";
import Cart from "../components/Cart";
import { productsAndCartData } from "../loaders/getCart&ProductData";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      loader: productsAndCartData,
      children:[
        {
            path: '/',
            element:  <Home></Home>
        },
        {
            path: '/home',
            element:  <Home></Home>
        },
        {
            path: '/shop',
            element:  <Shop></Shop>
        },
        {
            path: '/cart',
            element:  <Cart></Cart>
        },
        {
            path: '/about',
            element:  <About></About>
        },
      ]
    },
  ]);

  export default router 
  