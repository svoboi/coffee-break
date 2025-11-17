import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/employee/locations")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Outlet />;
}
