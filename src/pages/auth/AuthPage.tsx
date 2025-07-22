import Login from "./login/Login";
import Register from "./register/Register";

export default function AuthPage() {
  return (
    <div className="container grid grid-cols-2 pt-[5%]">
      <Login/>
      <Register/>
    </div>
  )
}
