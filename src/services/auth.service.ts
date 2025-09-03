import type { AuthResponse, LoginData } from "../types";
import { api } from "./config";

export const login = async (data: LoginData): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>(`/login`, data);
  return response.data;
};