import { Form, Input } from "antd";
import { useToast } from "../../../context/ToastProvider";
import { registerApi } from "../../../services/auth.service";
import type { IPayloadRegister } from "../../../types/auth";

interface IFormField extends IPayloadRegister {
  confirmPassword: string;
}

export default function Register() {
  const toast = useToast();
  const [form] = Form.useForm();

  const handleOnFinish = async (body: IFormField) => {
    try {
      const res = await registerApi(body);
      if (res?.success) {
        toast("success", res?.message);
        form.resetFields();
      }
    } catch (error: any) {
      if (!error?.response?.data?.success) {
        toast("info", error?.response?.data?.message);
      }
    }
  };
  return (
    <div>
      <h2 className="text-xl font-semibold uppercase">Đăng ký</h2>
      <p className="mt-4 text-[#717171]">
        Trở thành thành viên của MALE SNEAKER để nhận được những ưu đãi mới nhất
      </p>
      <div className="mt-8">
        <Form
          form={form}
          name="basic"
          initialValues={{ remember: true }}
          layout="vertical"
          onFinish={handleOnFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Họ và tên"
            name="userName"
            rules={[{ required: true, message: "Vui lòng nhập tên của bạn!" }]}
          >
            <Input className="h-[45px]" placeholder="Nhập tên của bạn" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              {
                type: "email",
                message: "Vui lòng nhập đúng định dạng email!",
              },
            ]}
          >
            <Input className="h-[45px]" placeholder="Nhập email của bạn" />
          </Form.Item>
          <Form.Item
            label="Số điện thoại"
            name="phone"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập số điện thoại của bạn!",
              },
            ]}
          >
            <Input
              className="h-[45px]"
              placeholder="Nhập số điện thoại của bạn"
            />
          </Form.Item>
          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              { required: true, message: "Vui lòng nhập mật khẩu!" },
              {
                min: 6,
                message: "Vui lòng nhập mật khẩu tối thiểu là 6 ký tự!",
              },
            ]}
            hasFeedback
          >
            <Input.Password
              className="h-[45px]"
              placeholder="Nhập mật khẩu của bạn"
            />
          </Form.Item>

          <Form.Item
            label="Xác nhận lại mật khẩu"
            name="confirmPassword"
            dependencies={["password"]}
            hasFeedback
            rules={[
              { required: true, message: "Vui lòng nhập lại mật khẩu!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Mật khẩu xác nhận không khớp!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              className="h-[45px]"
              placeholder="Xác nhận lại mật khẩu của bạn"
            />
          </Form.Item>

          <div>
            <p>Bạn đã có tài khoản đăng nhập ở góc trái</p>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="bg-black text-white w-full py-3 rounded-md hover:opacity-85 cursor-pointer duration-300"
            >
              Đăng ký
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
