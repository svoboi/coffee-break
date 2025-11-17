import { createContext } from "react";
import type { AppUser } from "../types/types";

export interface LoginContextType {
  user: AppUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (userName: string, password: string) => Promise<void>;
  logout: () => void;
  register: (userData: AppUser) => Promise<void>;
}

export const LoginContext = createContext<LoginContextType | undefined>(
  undefined
);
