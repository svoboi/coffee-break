import { useLoginStore, type LoginStoreType } from "../stores/useLoginStore";

export function useLogin(): LoginStoreType {
  return useLoginStore();
}
