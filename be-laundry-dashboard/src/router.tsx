import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import MainPage from "./components/main/MainPage";
import MainLayout from "./layouts/MainLayout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="" element={<MainPage />}></Route>
    </Route>,
  ),
);
