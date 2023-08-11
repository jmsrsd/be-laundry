import { Outlet } from "react-router-dom";

import Logo from "../assets/logo.svg";

export default function MainLayout() {
  return (
    <div className="flex h-screen min-h-screen w-full min-w-full flex-col bg-bubbles font-sans">
      <div className="flex h-16 w-full flex-none flex-row items-center bg-white">
        <div className="flex h-16 w-16 flex-none flex-col items-center justify-center">
          <img src={Logo} className="h-12 w-12" />
        </div>
        <div className="h-full w-full"></div>
      </div>
      <div className="h-full w-full">
        <Outlet />
      </div>
    </div>
  );
}
