import { useMutation, useQuery } from "@tanstack/react-query";
import { CafeServices } from "../services/Cafe.service";
import type { AxiosError } from "axios";
import { toast } from "react-toastify";
import type { Cafe } from "../types/types";
import { translations } from "../i18n/czech";

const t = translations;

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
      if (error.response?.status === 400)
        return t.cafeHooks.missingRequiredField;
      else {
        console.error(error);
        toast.error(t.errors.generalError);
      }
    },
    onSuccess(_data, variables) {
      toast.success(
        `${t.cafeHooks.createSuccessPrefix} ${variables.name} ${t.cafeHooks.createSuccessSuffix}`,
      );
    },
  });
};

export const useUpdateCafe = () => {
  return useMutation({
    mutationFn: (Cafe: Cafe) => CafeServices.updateCafe(Cafe),
    onError: (error: AxiosError) => {
      if (error.response?.status === 400)
        return t.cafeHooks.missingRequiredField;
      else {
        console.error(error);
        toast.error(t.errors.generalError);
      }
    },
    onSuccess(_data, variables) {
      toast.success(
        `${t.cafeHooks.updateSuccessPrefix} ${variables.name} ${t.cafeHooks.updateSuccessSuffix}`,
      );
    },
  });
};

export const useDeleteCafe = () => {
  return useMutation({
    mutationFn: (id: string) => CafeServices.deleteCafe(id),
    onError: (error: AxiosError) => {
      if (error.response?.status === 400)
        return t.cafeHooks.missingRequiredField;
      else {
        console.error(error);
        toast.error(t.errors.generalError);
      }
    },
    onSuccess() {
      toast.success(t.cafeHooks.deleteSuccess);
    },
  });
};
