import { useMutation, useQuery } from "@tanstack/react-query";
import { OrderItemServices } from "../services/OrderItem.service";
import type { AxiosError } from "axios";
import { toast } from "react-toastify";
import type { OrderItem, PostOrderItem } from "../types/types";
import { translations } from "../i18n/czech";

const t = translations;

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
      if (error.response?.status === 400)
        return t.orderItem.missingRequiredField;
      else {
        console.error(error);
        toast.error(t.errors.generalError);
      }
    },
  });
};

export const useUpdateOrderItem = () => {
  return useMutation({
    mutationFn: (OrderItem: OrderItem) =>
      OrderItemServices.updateOrderItem(OrderItem),
    onError: (error: AxiosError) => {
      if (error.response?.status === 400)
        return t.orderItem.missingRequiredField;
      else {
        console.error(error);
        toast.error(t.errors.generalError);
      }
    },
    onSuccess() {
      toast.success(t.orderItem.updatedSuccess);
    },
  });
};

export const useDeleteOrderItem = () => {
  return useMutation({
    mutationFn: (id: string) => OrderItemServices.deleteOrderItem(id),
    onError: (error: AxiosError) => {
      if (error.response?.status === 400)
        return t.orderItem.missingRequiredField;
      else {
        console.error(error);
        toast.error(t.errors.generalError);
      }
    },
    onSuccess() {
      toast.success(t.orderItem.deletedSuccess);
    },
  });
};
