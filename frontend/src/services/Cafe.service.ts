import api from "../api";
import type { Cafe } from "../types/types";
import type { AxiosInstance } from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const typedApi = api as any as AxiosInstance;

const getAllCafes = async () => {
  const response = await typedApi.get<Cafe[]>(`/cafe`);
  return response.data;
};

const getCafeById = async (id: string) => {
  const response = await typedApi.get<Cafe>(`/cafe/${id}`);
  return response.data;
};

const addCafe = async (Cafe: Cafe) => {
  const body = JSON.stringify(Cafe);
  const response = await typedApi.post<Cafe>("/cafe", body);
  return response.data;
};

const updateCafe = async (Cafe: Cafe) => {
  const body = JSON.stringify(Cafe);
  const response = await typedApi.put<Cafe>(`/cafe/${Cafe.id}`, body);
  return response.data;
};

const deleteCafe = async (id: string) => {
  return await typedApi.delete<void>(`/cafe/${id}`);
};

export const CafeServices = {
  getAllCafes,
  addCafe,
  updateCafe,
  deleteCafe,
  getCafeById,
};
