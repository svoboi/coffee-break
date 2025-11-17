import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "react-toastify";
import type { AppUser, UserRole } from "../types/types";

export interface LoginStoreType {
  user: Omit<AppUser, "password"> | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (
    userName: string,
    password: string,
    userRole: UserRole
  ) => Promise<void>;
  logout: () => Promise<void>;
  register: (userData: Omit<AppUser, "password">) => Promise<void>;
  setUser: (user: Omit<AppUser, "password"> | null) => void;
}

export const useLoginStore = create<LoginStoreType>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (
        userName: string,
        _password: string,
        userRole: UserRole
      ) => {
        set({ isLoading: true });
        try {
          // TODO: Replace with actual backend API call
          // const response = await UserServices.login({ userName, password });
          // set({ user: response, isAuthenticated: true });

          // Mock login for now
          const mockUser: Omit<AppUser, "password"> = {
            id: 1,
            userName,
            realName: "User",
            userRole: userRole,
          };
          set({ user: mockUser, isAuthenticated: true });
          toast.success("Přihlášení bylo úspěšné!");
        } catch (error) {
          console.error("Login failed:", error);
          toast.error("Přihlášení selhalo!");
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },

      logout: async () => {
        // TODO: Replace with actual backend API call to invalidate session
        // await UserServices.logout();
        set({ user: null, isAuthenticated: false });
        useLoginStore.persist.clearStorage();
      },

      register: async (userData: Omit<AppUser, "password">) => {
        set({ isLoading: true });
        try {
          // TODO: Replace with actual backend API call
          // const response = await UserServices.addUser(userData);
          // set({ user: response, isAuthenticated: true });

          // Mock registration for now
          set({ user: userData, isAuthenticated: true });
        } catch (error) {
          console.error("Registration failed:", error);
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },

      setUser: (user: Omit<AppUser, "password"> | null) => {
        set({
          user,
          isAuthenticated: !!user,
        });
      },
    }),
    {
      name: "login-store", // Name of the storage key
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }), // Only persist user and isAuthenticated, not isLoading
    }
  )
);
