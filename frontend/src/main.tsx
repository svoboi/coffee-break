import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createRouteMask,
  createRouter,
} from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";

const locationMask = createRouteMask({
  routeTree,
  from: "/employee/locations/all",
  to: "/locations",
});

const offerMask = createRouteMask({
  routeTree,
  from: "/employee/offers/all",
  to: "/offers",
});

const dashboardMask = createRouteMask({
  routeTree,
  from: "/employee/dashboard",
  to: "/dashboard",
});

const router = createRouter({
  routeTree,
  routeMasks: [locationMask, offerMask, dashboardMask],
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>
  );
}
