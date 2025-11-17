import { useMutation, useQuery } from "@tanstack/react-query";
import { CafeServices } from "../services/Cafe.service";
import type { AxiosError } from "axios";
import { toast } from "react-toastify";
import type { Cafe } from "../types/types";

export const useGetCafes = (enabled: boolean) => {
  return useQuery<Cafe[]>({
    queryKey: ["cafe"],
    queryFn: () => CafeServices.getAllCafes(),
    enabled,
  });
};

export const useGetCafeById = (enabled: boolean, id: string) => {
  return useQuery<Cafe>({
    queryKey: ["cafe", id],
    queryFn: () => CafeServices.getCafeById(id),
    enabled,
  });
};

export const useAddCafe = () => {
  return useMutation({
    mutationFn: (Cafe: Cafe) => CafeServices.addCafe(Cafe),
    onError: (error: AxiosError) => {
      if (error.response?.status === 400) return "Missing property";
      else {
        console.error(error);
        toast.error("Unexpected error");
      }
    },
    onSuccess(_data, variables) {
      toast.success(`Cafe ${variables.name} was successfully created!`);
    },
  });
};

export const useUpdateCafe = () => {
  return useMutation({
    mutationFn: (Cafe: Cafe) => CafeServices.updateCafe(Cafe),
    onError: (error: AxiosError) => {
      if (error.response?.status === 400) return "Missing property";
      else {
        console.error(error);
        toast.error("Unexpected error");
      }
    },
    onSuccess(_data, variables) {
      toast.success(`Cafe ${variables.name} was successfully updated!`);
    },
  });
};

export const useDeleteCafe = () => {
  return useMutation({
    mutationFn: (id: string) => CafeServices.deleteCafe(id),
    onError: (error: AxiosError) => {
      if (error.response?.status === 400) return "Missing property";
      else {
        console.error(error);
        toast.error("Unexpected error");
      }
    },
    onSuccess() {
      toast.success(`Cafe was successfully deleted!`);
    },
  });
};
