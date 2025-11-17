import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/employee/offers")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Outlet />;
}
