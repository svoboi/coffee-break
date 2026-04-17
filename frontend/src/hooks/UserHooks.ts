import { useMutation, useQuery } from "@tanstack/react-query";
import { UserServices } from "../services/User.service";
import type { AxiosError } from "axios";
import { toast } from "react-toastify";
import type { AppUser, CoffeeOrder } from "../types/types";
import { translations } from "../i18n/czech";

const t = translations;

export const useGetUsers = (enabled: boolean) => {
  return useQuery<AppUser[]>({
    queryKey: ["user"],
    queryFn: () => UserServices.getUser(),
    enabled,
  });
};

export const useGetUserById = (enabled: boolean, id: string) => {
  return useQuery<AppUser>({
    queryKey: ["user", id],
    queryFn: () => UserServices.getUserById(id),
    enabled,
  });
};

export const useAddUser = () => {
  return useMutation({
    mutationFn: (User: AppUser) => UserServices.addUser(User),
    onError: (error: AxiosError) => {
      if (error.response?.status === 400)
        return t.userHooks.missingRequiredField;
      else {
        console.error(error);
        toast.error(t.errors.generalError);
      }
    },
    onSuccess(_data, variables) {
      toast.success(
        `${t.userHooks.createSuccessPrefix} ${variables.userName} ${t.userHooks.createSuccessSuffix}`,
      );
    },
  });
};

export const useUpdateUser = () => {
  return useMutation({
    mutationFn: (User: AppUser) => UserServices.updateUser(User),
    onError: (error: AxiosError) => {
      if (error.response?.status === 400)
        return t.userHooks.missingRequiredField;
      else {
        console.error(error);
        toast.error(t.errors.generalError);
      }
    },
    onSuccess(_data, variables) {
      toast.success(
        `${t.userHooks.updateSuccessPrefix} ${variables.userName} ${t.userHooks.updateSuccessSuffix}`,
      );
    },
  });
};

export const useDeleteUser = () => {
  return useMutation({
    mutationFn: (id: string) => UserServices.deleteUser(id),
    onError: (error: AxiosError) => {
      if (error.response?.status === 400)
        return t.userHooks.missingRequiredField;
      else {
        console.error(error);
        toast.error(t.errors.generalError);
      }
    },
    onSuccess() {
      toast.success(t.userHooks.deleteSuccess);
    },
  });
};

export const useGetUserOrders = (enabled: boolean, userId?: number) => {
  return useQuery<CoffeeOrder[]>({
    queryKey: ["user", userId, "order"],
    queryFn: () => UserServices.getUserOrders(userId as number),
    enabled: enabled && userId !== undefined,
  });
};
