import { Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "../../../context/ToastProvider";
import { loginApi } from "../../../services/auth.service";
import type { IPayloadRegister } from "../../../types/auth";
import { useAuth } from "../../../context/AuthContext";

export default function Login() {
  const toast = useToast();
  const nav = useNavigate();
  const { setUser, setIsLogged } = useAuth();
  const onFinish = async (
    values: Pick<IPayloadRegister, "email" | "password">
  ) => {
    try {
      const res = await loginApi(values);
      if (res?.success) {
        toast("success", res.message);
        setUser(res.data.foundUser);
        setIsLogged(true);
        localStorage.setItem("user", JSON.stringify(res.data.foundUser));
        localStorage.setItem("accessToken", res.data.accessToken);
        nav("/");
      }
    } catch (error: any) {
      if (!error?.response?.data?.success) {
        toast("info", error?.response?.data?.message);
      }
    }
  };
  return (
    <div>
      <h2 className="text-xl font-semibold uppercase">Đăng nhập</h2>
      <p className="mt-4 text-[#717171]">Chào mừng bạn đến với MALE SNEAKER</p>

      <div className="mt-8">
        <Form
          name="basic"
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email" },
              { type: "email", message: "Vui long nhập đúng " },
            ]}
          >
            <Input
              className="h-[45px]"
              placeholder="Nhập email của bạn"
            ></Input>
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Vui lòng nhập mật khẩu!" },
              {
                min: 6,
                message: "Vui lòng nhập mật khẩu tối thiểu là 6 ký tự!",
              },
            ]}
          >
            <Input.Password
              className="h-[45px]"
              placeholder="Nhập mật khẩu của bạn"
            />
          </Form.Item>
          <div>
            <Link to={"/"}>Quên mật khẩu</Link>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="bg-black text-white w-full py-3 rounded-md hover:opacity-85 cursor-pointer duration-300"
            >
              Đăng nhập
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
