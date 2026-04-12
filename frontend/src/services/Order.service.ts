import api from "../api";
import type { CoffeeOrder, OrderState, PostCoffeeOrder } from "../types/types";
import type { AxiosInstance } from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const typedApi = api as any as AxiosInstance;

const getOrder = async () => {
  const response = await typedApi.get<CoffeeOrder[]>(`/order`);
  return response.data;
};

const getOrderById = async (id: string) => {
  const response = await typedApi.get<CoffeeOrder>(`/order/${id}`);
  return response.data;
};

const addOrder = async (Order: PostCoffeeOrder) => {
  const body = JSON.stringify(Order);
  const response = await typedApi.post<CoffeeOrder>("/order", body);
  return response.data;
};

const updateOrder = async (Order: CoffeeOrder) => {
  const body = JSON.stringify(Order);
  const response = await typedApi.put<CoffeeOrder>(`/order/${Order.id}`, body);
  return response.data;
};

const deleteOrder = async (id: string) => {
  return await typedApi.delete<void>(`/order/${id}`);
};

const updateOrderStatus = async (id: number, newState: OrderState) => {
  const response = await typedApi.post<CoffeeOrder>(
    `/order/${id}/status`,
    null,
    {
      params: { newState },
    },
  );
  return response.data;
};

export const OrderServices = {
  getOrder,
  addOrder,
  updateOrder,
  deleteOrder,
  getOrderById,
  updateOrderStatus,
};
