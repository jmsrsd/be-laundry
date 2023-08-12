import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import ErrorPage from "./components/error/ErrorPage";
import MainLayout from "./components/main/MainLayout";
import MainPage from "./components/main/MainPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
      <Route path="" element={<MainPage />} />
      <Route path="products" element={<MainPage />} />
      <Route path="sales" element={<MainPage />} />
      <Route path="settings" element={<MainPage />} />
    </Route>,
  ),
);
