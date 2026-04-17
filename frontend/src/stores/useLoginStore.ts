import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "react-toastify";
import type { AppUser, PostAppUser, UserRole } from "../types/types";
import { UserServices } from "../services/User.service";
import { translations } from "../i18n/czech";

const t = translations;

export interface LoginStoreType {
  user: Omit<AppUser, "password"> | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (
    userName: string,
    password: string,
    userRole: UserRole,
  ) => Promise<void>;
  logout: () => Promise<void>;
  register: (userData: PostAppUser) => Promise<void>;
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
        userRole: UserRole,
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
          toast.success(t.auth.loginSuccess);
        } catch (error) {
          console.error("Login failed:", error);
          toast.error(t.auth.loginFailed);
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
        toast.info(t.account.logoutMessage);
      },

      register: async (userData: PostAppUser) => {
        set({ isLoading: true });
        try {
          await UserServices.addUser(userData);
          toast.success(t.auth.registerSuccess);
        } catch (error) {
          console.error("Registration failed:", error);
          toast.error(t.auth.registerFailed);
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
    },
  ),
);
