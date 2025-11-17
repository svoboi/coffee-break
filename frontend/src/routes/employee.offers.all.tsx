import { createFileRoute } from "@tanstack/react-router";
import OfferList from "../components/offers/OfferList";

export const Route = createFileRoute("/employee/offers/all")({
  component: RouteComponent,
});

function RouteComponent() {
  return <OfferList />;
}
