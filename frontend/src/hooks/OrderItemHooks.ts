import { useMutation, useQuery } from "@tanstack/react-query";
import { OrderItemServices } from "../services/OrderItem.service";
import type { AxiosError } from "axios";
import { toast } from "react-toastify";
import type { OrderItem, PostOrderItem } from "../types/types";

export const useGetOrderItems = (enabled: boolean) => {
  return useQuery<OrderItem[]>({
    queryKey: ["orderItem"],
    queryFn: () => OrderItemServices.getOrderItem(),
    enabled,
  });
};

export const useGetOrderItemById = (enabled: boolean, id: string) => {
  return useQuery<OrderItem>({
    queryKey: ["orderItem", id],
    queryFn: () => OrderItemServices.getOrderItemById(id),
    enabled,
  });
};

export const useAddOrderItem = () => {
  return useMutation({
    mutationFn: (OrderItem: PostOrderItem) =>
      OrderItemServices.addOrderItem(OrderItem),
    onError: (error: AxiosError) => {
      if (error.response?.status === 400) return "Missing property";
      else {
        console.error(error);
        toast.error("Unexpected error");
      }
    },
  });
};

export const useUpdateOrderItem = () => {
  return useMutation({
    mutationFn: (OrderItem: OrderItem) =>
      OrderItemServices.updateOrderItem(OrderItem),
    onError: (error: AxiosError) => {
      if (error.response?.status === 400) return "Missing property";
      else {
        console.error(error);
        toast.error("Unexpected error");
      }
    },
    onSuccess() {
      toast.success(`OrderItem was successfully updated!`);
    },
  });
};

export const useDeleteOrderItem = () => {
  return useMutation({
    mutationFn: (id: string) => OrderItemServices.deleteOrderItem(id),
    onError: (error: AxiosError) => {
      if (error.response?.status === 400) return "Missing property";
      else {
        console.error(error);
        toast.error("Unexpected error");
      }
    },
    onSuccess() {
      toast.success(`OrderItem was successfully deleted!`);
    },
  });
};
