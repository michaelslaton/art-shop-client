import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Layout/home-page/HomePage";
import Categories from "./Layout/categories/Categories";
import ShoppingCart from "./Layout/shopping-cart/ShoppingCart";
import Error404 from "./utils/error404/Error404";
import Layout from "./Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: "/category/:category",
        element: <Categories/>,
      },
      {
        path: "/shoppingcart",
        element: <ShoppingCart/>
      },
      {
        path: "*",
        element: <Error404/>,
      }
    ],
  },
]);

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};

export default App;