import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "./components/error/ErrorPage";
import MainLayout from "./components/main/MainLayout";
import MainPage from "./components/main/MainPage";
import ProductAddPage from "./components/product/page/add/ProductAddPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "products",
        element: <ProductAddPage />,
      },
    ],
  },
]);
