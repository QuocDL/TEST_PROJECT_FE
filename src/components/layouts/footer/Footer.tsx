import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-[10%]">
      <div className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div>
              <h1 className="text-2xl font-bold">MALE SNEAKER</h1>
            </div>
            <p className="text-sm">
              Chất lượng làm nên thương hiệu – Phục vụ bằng cả trái tim
            </p>
          </div>

          <div>
            <h6 className="text-lg font-semibold mb-3">
              Liên hệ với chúng tôi
            </h6>
            <ul className="space-y-2 text-sm">
              <li>
                <i className="pe-7s-home"></i> Ngõ 195 - Cầu Diễn, quận Bắc Từ
                Liêm, Hà Nội
              </li>
              <li>
                <i className="pe-7s-mail"></i>{" "}
                <a
                  href="mailto:phucnguyen11204@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  phucnguyen11204@gmail.com
                </a>
              </li>
              <li>
                <i className="pe-7s-call"></i>{" "}
                <a href="tel:(012)800456789987" className="hover:underline">
                  (+84) 842 116 855
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-lg font-semibold mb-3">Thông tin</h6>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Thông tin giao hàng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Điều khoản & Điều kiện
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Liên hệ với chúng tôi
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-lg font-semibold mb-3">Theo dõi chúng tôi</h6>
            <div className="flex space-x-4 text-xl text-gray-600">
              <ul className="flex gap-5">
                <li>
                  <a
                    href="https://www.facebook.com/nguyen.phuc.544570"
                    target="_blank"
                  >
                    <FacebookOutlined />
                  </a>
                </li>
                <li>
                  <a href="">
                    <InstagramOutlined />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@PhucNguyen-se7rg "
                    target="_blank"
                  >
                    <YoutubeOutlined />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="container mx-auto mt-12 px-4 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="w-full md:w-1/2">
            <h6 className="text-lg font-semibold mb-3">Email vào, quà ra!</h6>
            <form className="flex">
              <input
                type="email"
                placeholder="Nhập địa chỉ email của bạn"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
              />
              <button className="bg-black text-white px-5 py-2 rounded-r-md hover:bg-gray-800">
                Xác nhận
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-VNPAY-QR-1-300x96.png"
              alt="payment"
              className="w-24"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-200 py-4 text-center text-sm text-gray-600">
        <p>
          &copy; 2025 <b>MALE SNEAKER</b>
          {/* <FaHeart className="inline text-red-500" /> by{" "} */}
        </p>
      </div>
    </footer>
  );
}
