import axios from "axios";
import { mockApi } from "./mockApi";

const isFrontendOnly = import.meta.env.VITE_FRONTEND_ONLY === "true";

const realApi = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "/api"
      : import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

// Wrap mockApi to match axios interface
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const axiosLikeMockApi: any = {
  ...mockApi,
  interceptors: {
    request: { use: () => {}, eject: () => {} },
    response: { use: () => {}, eject: () => {} },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const api: any = isFrontendOnly ? axiosLikeMockApi : realApi;

if (isFrontendOnly) {
  console.log("🎭 Frontend-only mode enabled. Using mock data.");
}

export default api;
