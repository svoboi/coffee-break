import { createFileRoute, Navigate, Outlet } from "@tanstack/react-router";
import { useLogin } from "../hooks/useLoginHook";

export const Route = createFileRoute("/employee")({
  component: RouteComponent,
});

function RouteComponent() {
  const { isAuthenticated, user } = useLogin();

  if (!isAuthenticated || user?.userRole !== "CAFE_EMPLOYEE") {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}
