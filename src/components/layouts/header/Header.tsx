import {
  InfoCircleOutlined,
  LogoutOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Badge, Dropdown, type MenuProps } from "antd";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export default function Header() {
  const { isLogged, user, setIsLogged, setUser } = useAuth();
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    setIsLogged(false);
    setUser(null);
  };
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link to={"/profile"}>Thông tin</Link>,
      icon: <InfoCircleOutlined />,
    },
    {
      key: "2",
      label: <Link to={"/profile/my-orders"}>Đơn hàng</Link>,
      icon: <UnorderedListOutlined />,
    },
    {
      type: "divider",
    },
    {
      label: "Đăng xuất",
      key: "3",
      icon: <LogoutOutlined />,
      onClick: handleLogout,
    },
  ];
  return (
    <header className="container py-8 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">MALE SNEAKER</h1>
      </div>
      <nav>
        <ul className="flex gap-3">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-black"
              }
              to={"/"}
            >
              Trang chủ
            </NavLink>
          </li>
          <li>
            <Link to={"/"}>Sản phẩm</Link>
          </li>
          <li>
            <Link to={"/"}>Danh mục</Link>
          </li>
          <li>
            <Link to={"/"}>Liên hệ</Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-2 bg-[#F0F0F0] py-2 px-6 rounded-[30px]">
        <SearchOutlined />
        <input className="outline-none" type="text" placeholder="Tìm kiếm" />
      </div>
      {isLogged ? (
        <div className="flex gap-6 items-center">
          <Dropdown menu={{ items }} placement="bottom">
            <Link to="/profile">
              <UserOutlined className="text-2xl text-black" />
            </Link>
          </Dropdown>
          <Link to={"/cart"}>
            <Badge count={0} showZero>
              <ShoppingCartOutlined className="text-2xl" />
            </Badge>
          </Link>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Link to={"/login"}>Đăng nhập</Link>
          <span>/</span>
          <Link to={"/register"}>Đăng ký</Link>
        </div>
      )}
    </header>
  );
}
