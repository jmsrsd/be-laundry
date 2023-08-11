import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import MainLayout from "./components/main/MainLayout";
import MainPage from "./components/main/MainPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="" element={<MainPage />} />
    </Route>,
  ),
);
