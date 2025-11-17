import api from "../api";
import type { AppUser } from "../types/types";
import type { AxiosInstance } from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const typedApi = api as any as AxiosInstance;

const getUser = async () => {
  const response = await typedApi.get<AppUser[]>(`/user`);
  return response.data;
};

const getUserById = async (id: string) => {
  const response = await typedApi.get<AppUser>(`/user/${id}`);
  return response.data;
};

const addUser = async (User: AppUser) => {
  const body = JSON.stringify(User);
  const response = await typedApi.post<AppUser>("/user", body);
  return response.data;
};

const updateUser = async (User: AppUser) => {
  const body = JSON.stringify(User);
  const response = await typedApi.put<AppUser>(`/user/${User.id}`, body);
  return response.data;
};

const deleteUser = async (id: string) => {
  return await typedApi.delete<void>(`/user/${id}`);
};

export const UserServices = {
  getUser,
  addUser,
  updateUser,
  deleteUser,
  getUserById,
};
