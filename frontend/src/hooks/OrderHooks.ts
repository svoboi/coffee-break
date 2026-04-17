import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { OrderServices } from "../services/Order.service";
import type { AxiosError } from "axios";
import { toast } from "react-toastify";
import type { CoffeeOrder, OrderState } from "../types/types";
import { translations } from "../i18n/czech";

const t = translations;

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
      if (error.response?.status === 400)
        return t.orderHooks.missingRequiredField;
      else {
        console.error(error);
        toast.error(t.errors.generalError);
      }
    },
    onSuccess() {
      toast.success(t.orderHooks.createSuccess);
    },
  });
};

export const useUpdateOrder = () => {
  return useMutation({
    mutationFn: (Order: CoffeeOrder) => OrderServices.updateOrder(Order),
    onError: (error: AxiosError) => {
      if (error.response?.status === 400)
        return t.orderHooks.missingRequiredField;
      else {
        console.error(error);
        toast.error(t.errors.generalError);
      }
    },
    onSuccess() {
      toast.success(t.orderHooks.updateSuccess);
    },
  });
};

export const useDeleteOrder = () => {
  return useMutation({
    mutationFn: (id: string) => OrderServices.deleteOrder(id),
    onError: (error: AxiosError) => {
      if (error.response?.status === 400)
        return t.orderHooks.missingRequiredField;
      else {
        console.error(error);
        toast.error(t.errors.generalError);
      }
    },
    onSuccess() {
      toast.success(t.orderHooks.deleteSuccess);
    },
  });
};

export const useUpdateOrderStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, newState }: { id: number; newState: OrderState }) =>
      OrderServices.updateOrderStatus(id, newState),
    onError: (error: AxiosError) => {
      if (error.response?.status === 400)
        return t.orderHooks.invalidStatusChange;
      else {
        console.error(error);
        toast.error(t.errors.generalError);
      }
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["order"] });
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success(t.orderHooks.statusUpdatedSuccess);
    },
  });
};
