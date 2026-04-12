import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { OrderServices } from "../services/Order.service";
import type { AxiosError } from "axios";
import { toast } from "react-toastify";
import type { CoffeeOrder, OrderState } from "../types/types";

export const useGetOrders = (enabled: boolean) => {
  return useQuery<CoffeeOrder[]>({
    queryKey: ["order"],
    queryFn: () => OrderServices.getOrder(),
    enabled,
  });
};

export const useGetOrderById = (enabled: boolean, id: string) => {
  return useQuery<CoffeeOrder>({
    queryKey: ["order", id],
    queryFn: () => OrderServices.getOrderById(id),
    enabled,
  });
};

export const useAddOrder = () => {
  return useMutation({
    mutationFn: (Order: CoffeeOrder) => OrderServices.addOrder(Order),
    onError: (error: AxiosError) => {
      if (error.response?.status === 400) return "Missing property";
      else {
        console.error(error);
        toast.error("Unexpected error");
      }
    },
    onSuccess() {
      toast.success(`Order was successfully created!`);
    },
  });
};

export const useUpdateOrder = () => {
  return useMutation({
    mutationFn: (Order: CoffeeOrder) => OrderServices.updateOrder(Order),
    onError: (error: AxiosError) => {
      if (error.response?.status === 400) return "Missing property";
      else {
        console.error(error);
        toast.error("Unexpected error");
      }
    },
    onSuccess() {
      toast.success(`Order was successfully updated!`);
    },
  });
};

export const useDeleteOrder = () => {
  return useMutation({
    mutationFn: (id: string) => OrderServices.deleteOrder(id),
    onError: (error: AxiosError) => {
      if (error.response?.status === 400) return "Missing property";
      else {
        console.error(error);
        toast.error("Unexpected error");
      }
    },
    onSuccess() {
      toast.success(`Order was successfully deleted!`);
    },
  });
};

export const useUpdateOrderStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, newState }: { id: number; newState: OrderState }) =>
      OrderServices.updateOrderStatus(id, newState),
    onError: (error: AxiosError) => {
      if (error.response?.status === 400) return "Invalid state transition";
      else {
        console.error(error);
        toast.error("Unexpected error");
      }
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["order"] });
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("Order status was successfully updated!");
    },
  });
};
