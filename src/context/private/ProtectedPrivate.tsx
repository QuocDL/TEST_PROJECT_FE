import { Navigate } from "react-router-dom";

const ProtectedPrivate = ({ children }: { children: React.ReactNode }) => {
  const storaged = localStorage.getItem("user");
  const isLogged = storaged ? JSON.parse(storaged) : false;

  if (!isLogged) {
    return <Navigate to={"/"} />;
  }

  return children;
};

export default ProtectedPrivate;
