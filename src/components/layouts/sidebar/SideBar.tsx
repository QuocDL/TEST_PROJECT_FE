import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { menuGroups } from "./_options";
import { LogoutOutlined } from "@ant-design/icons";
import SideBarItems from "./SileBarItems";

export default function SideBar() {
  const { setIsLogged, setUser } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    setIsLogged(false);
    setUser(null);
    navigate("/");
  };
  return (
    <aside className="h-[100vh] sticky top-0 py-4 px-4 w-70 bg-black/98 text-white">
      <Link
        to={"/"}
        className="font-bold text-2xl hover:text-blue-400 duration-300"
      >
        MALE SNAKER
      </Link>
      <div className="mt-8">
        <ul className="flex flex-col gap-8 font-normal text-base">
          {menuGroups.map((menuItem, index) => (
            <SideBarItems key={index} item={menuItem} />
          ))}
        </ul>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <button
          onClick={handleLogout}
          className=" text-white my-6 hover:text-blue-400 flex gap-3 duration-300 cursor-pointer text-base"
        >
          <LogoutOutlined />
          Đăng xuất
        </button>
      </div>
    </aside>
  );
}
