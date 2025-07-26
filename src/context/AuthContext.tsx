import React, { createContext, useContext, useEffect, useState } from "react";
import type { IUser } from "../types/user";

type IAuthContext = {
  isLogged: boolean;
  setIsLogged: (value: boolean) => void;
  user: null | IUser;
  setUser: (value: IUser | null) => void;
};
const AuthContext = createContext<IAuthContext>({
  isLogged: false,
  setIsLogged: () => {},
  user: null,
  setUser: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLogged(!!user);
    if (user) {
      setIsLogged(true);
    }
  }, []);
  console.log(user);
  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
