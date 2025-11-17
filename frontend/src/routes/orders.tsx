import { createFileRoute } from "@tanstack/react-router";
import ClientOrders from "../components/clientOrders/ClientOrders";

export const Route = createFileRoute("/orders")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ClientOrders />;
}
