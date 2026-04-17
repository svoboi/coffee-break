import { useMutation, useQuery } from "@tanstack/react-query";
import { CoffeeServices } from "../services/Coffee.service";
import type { AxiosError } from "axios";
import { toast } from "react-toastify";
import type { Coffee } from "../types/types";
import { translations } from "../i18n/czech";

const t = translations;

export const useGetCoffees = (enabled: boolean) => {
  return useQuery<Coffee[]>({
    queryKey: ["coffee"],
    queryFn: () => CoffeeServices.getAllCoffees(),
    enabled,
  });
};

export const useGetCoffeeById = (enabled: boolean, id: string) => {
  return useQuery<Coffee>({
    queryKey: ["coffee", id],
    queryFn: () => CoffeeServices.getCoffeeById(id),
    enabled,
  });
};

export const useAddCoffee = () => {
  return useMutation({
    mutationFn: (Coffee: Coffee) => CoffeeServices.addCoffee(Coffee),
    onError: (error: AxiosError) => {
      if (error.response?.status === 400)
        return t.coffeeHooks.missingRequiredField;
      else {
        console.error(error);
        toast.error(t.errors.generalError);
      }
    },
    onSuccess(_data, variables) {
      toast.success(
        `${t.coffeeHooks.createSuccessPrefix} ${variables.name} ${t.coffeeHooks.createSuccessSuffix}`,
      );
    },
  });
};

export const useUpdateCoffee = () => {
  return useMutation({
    mutationFn: (Coffee: Coffee) => CoffeeServices.updateCoffee(Coffee),
    onError: (error: AxiosError) => {
      if (error.response?.status === 400)
        return t.coffeeHooks.missingRequiredField;
      else {
        console.error(error);
        toast.error(t.errors.generalError);
      }
    },
    onSuccess(_data, variables) {
      toast.success(
        `${t.coffeeHooks.updateSuccessPrefix} ${variables.name} ${t.coffeeHooks.updateSuccessSuffix}`,
      );
    },
  });
};

export const useDeleteCoffee = () => {
  return useMutation({
    mutationFn: (id: string) => CoffeeServices.deleteCoffee(id),
    onError: (error: AxiosError) => {
      if (error.response?.status === 400)
        return t.coffeeHooks.missingRequiredField;
      else {
        console.error(error);
        toast.error(t.errors.generalError);
      }
    },
    onSuccess() {
      toast.success(t.coffeeHooks.deleteSuccess);
    },
  });
};
