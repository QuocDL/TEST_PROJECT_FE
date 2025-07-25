import type { IPayloadRegister } from "../types/auth";
import instance from "../utils/api";

export const registerApi = async (body: IPayloadRegister) => {
  const { data } = await instance.post("/auth/register", body);
  return data;
};
