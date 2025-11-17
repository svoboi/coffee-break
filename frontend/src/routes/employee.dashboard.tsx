import { createFileRoute } from "@tanstack/react-router";
import Orders from "../components/orders/Orders";

export const Route = createFileRoute("/employee/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Orders />;
}
