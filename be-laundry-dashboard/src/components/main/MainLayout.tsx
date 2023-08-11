import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Logo from "../../assets/logo.svg";

export default function MainLayout() {
  const location = useLocation();

  const title = {
    "/": "Home",
  }[location.pathname];

  return (
    <div className="flex h-screen min-h-screen w-full min-w-full flex-col bg-bubbles font-sans">
      <div className="flex h-16 w-full flex-none flex-row items-center bg-white">
        <div className="flex h-16 w-16 flex-none flex-col items-center justify-center">
          <img src={Logo} className="h-8 w-8" />
        </div>
        <div className="flex h-full w-full flex-row items-center text-4xl font-bold text-[#303030]">
          {title}
        </div>
      </div>
      <div className="h-full w-full">
        <Outlet />
      </div>
    </div>
  );
}
