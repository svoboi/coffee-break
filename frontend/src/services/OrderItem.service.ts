import api from "../api";
import type { OrderItem, PostOrderItem } from "../types/types";
import type { AxiosInstance } from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const typedApi = api as any as AxiosInstance;

const getOrderItem = async () => {
  const response = await typedApi.get<OrderItem[]>(`/orderItem`);
  return response.data;
};

const getOrderItemById = async (id: string) => {
  const response = await typedApi.get<OrderItem>(`/orderItem/${id}`);
  return response.data;
};

const addOrderItem = async (OrderItem: PostOrderItem) => {
  const body = JSON.stringify(OrderItem);
  const response = await typedApi.post<PostOrderItem>("/orderItem", body);
  return response.data;
};

const updateOrderItem = async (OrderItem: OrderItem) => {
  const body = JSON.stringify(OrderItem);
  const response = await typedApi.put<OrderItem>(
    `/orderItem/${OrderItem.id}`,
    body
  );
  return response.data;
};

const deleteOrderItem = async (id: string) => {
  return await typedApi.delete<void>(`/orderItem/${id}`);
};

export const OrderItemServices = {
  getOrderItem,
  addOrderItem,
  updateOrderItem,
  deleteOrderItem,
  getOrderItemById,
};
