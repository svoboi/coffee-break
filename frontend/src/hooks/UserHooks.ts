import { useMutation, useQuery } from "@tanstack/react-query";
import { UserServices } from "../services/User.service";
import type { AxiosError } from "axios";
import { toast } from "react-toastify";
import type { AppUser } from "../types/types";

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
      if (error.response?.status === 400) return "Missing property";
      else {
        console.error(error);
        toast.error("Unexpected error");
      }
    },
    onSuccess(_data, variables) {
      toast.success(`User ${variables.userName} was successfully created!`);
    },
  });
};

export const useUpdateUser = () => {
  return useMutation({
    mutationFn: (User: AppUser) => UserServices.updateUser(User),
    onError: (error: AxiosError) => {
      if (error.response?.status === 400) return "Missing property";
      else {
        console.error(error);
        toast.error("Unexpected error");
      }
    },
    onSuccess(_data, variables) {
      toast.success(`User ${variables.userName} was successfully updated!`);
    },
  });
};

export const useDeleteUser = () => {
  return useMutation({
    mutationFn: (id: string) => UserServices.deleteUser(id),
    onError: (error: AxiosError) => {
      if (error.response?.status === 400) return "Missing property";
      else {
        console.error(error);
        toast.error("Unexpected error");
      }
    },
    onSuccess() {
      toast.success(`User was successfully deleted!`);
    },
  });
};
