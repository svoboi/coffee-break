import { useMutation, useQuery } from "@tanstack/react-query";
import { CoffeeServices } from "../services/Coffee.service";
import type { AxiosError } from "axios";
import { toast } from "react-toastify";
import type { Coffee } from "../types/types";

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
      if (error.response?.status === 400) return "Missing property";
      else {
        console.error(error);
        toast.error("Unexpected error");
      }
    },
    onSuccess(_data, variables) {
      toast.success(`Coffee ${variables.name} was successfully created!`);
    },
  });
};

export const useUpdateCoffee = () => {
  return useMutation({
    mutationFn: (Coffee: Coffee) => CoffeeServices.updateCoffee(Coffee),
    onError: (error: AxiosError) => {
      if (error.response?.status === 400) return "Missing property";
      else {
        console.error(error);
        toast.error("Unexpected error");
      }
    },
    onSuccess(_data, variables) {
      toast.success(`Coffee ${variables.name} was successfully updated!`);
    },
  });
};

export const useDeleteCoffee = () => {
  return useMutation({
    mutationFn: (id: string) => CoffeeServices.deleteCoffee(id),
    onError: (error: AxiosError) => {
      if (error.response?.status === 400) return "Missing property";
      else {
        console.error(error);
        toast.error("Unexpected error");
      }
    },
    onSuccess() {
      toast.success(`Coffee was successfully deleted!`);
    },
  });
};
