import Login from "./login/Login";
import Register from "./register/Register";

export default function AuthPage() {
  return (
    <div className="max-w-default mx-8 default:mx-auto grid grid-cols-2 gap-[5%] pt-[5%]">
      <Login />
      <Register />
    </div>
  );
}
