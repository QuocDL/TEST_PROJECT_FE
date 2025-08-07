import { Outlet } from "react-router-dom";
import SideBar from "./sidebar/SideBar";

const PrivateLayout = () => {
  return (
    <div className="flex gap-12">
      <SideBar />
      <main className="h-[300vh]">
        <Outlet />
      </main>
    </div>
  );
};

export default PrivateLayout;
