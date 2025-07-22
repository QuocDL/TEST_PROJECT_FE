import { SearchOutlined } from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="container py-8 flex items-center justify-between">
      {/* LOGO */}
      <div>
        <h1 className="text-2xl font-bold">MALE SNEAKER</h1>
      </div>
      <nav>
        <ul className="flex gap-3">
          <li>
            <NavLink
              className={({ isActive }) =>
                 isActive ? 'text-green-500': "text-black"
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

      <div className="flex gap-2 bg-[#f0f0f0] py-2 px-6 rounded-[30px]">
        <SearchOutlined />
        <input className="outline-none" type="text" placeholder="Tìm kiếm"/>
      </div>

      <div className="flex item-center gap-2">
        <Link to={"/login"}>Đăng nhập</Link>
        <span>|</span>
        <Link to={"/register"}>Đăng ký</Link>
      </div>
    </header>
  );
}
