import type { IPayloadRegister } from "../types/auth";
import instance from "../utils/api";

export const registerApi = async (body: IPayloadRegister) => {
  const { data } = await instance.post("/auth/register", body);
  return data;
};

export const loginApi = async (body: Pick<IPayloadRegister, "email" | "password">) => {
    const { data } = await instance.post("/auth/login", body)
    return data; 
};