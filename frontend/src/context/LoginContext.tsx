import { type ReactNode } from "react";
import { useLoginStore } from "../stores/useLoginStore";

export function LoginProvider({ children }: { children: ReactNode }) {
  // Initialize the store on mount (store persists across the app)
  useLoginStore.getState();

  return <>{children}</>;
}
