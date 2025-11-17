import api from "../api";
import type { Coffee } from "../types/types";
import type { AxiosInstance } from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const typedApi = api as any as AxiosInstance;

const getAllCoffees = async () => {
  const response = await typedApi.get<Coffee[]>(`/coffee`);
  return response.data;
};

const getCoffeeById = async (id: string) => {
  const response = await typedApi.get<Coffee>(`/coffee/${id}`);
  return response.data;
};

const addCoffee = async (Coffee: Coffee) => {
  const body = JSON.stringify(Coffee);
  const response = await typedApi.post<Coffee>("/coffee", body);
  return response.data;
};

const updateCoffee = async (Coffee: Coffee) => {
  const body = JSON.stringify(Coffee);
  const response = await typedApi.put<Coffee>(`/coffee/${Coffee.id}`, body);
  return response.data;
};

const deleteCoffee = async (id: string) => {
  return await typedApi.delete<void>(`/coffee/${id}`);
};

export const CoffeeServices = {
  getAllCoffees,
  addCoffee,
  updateCoffee,
  deleteCoffee,
  getCoffeeById,
};
