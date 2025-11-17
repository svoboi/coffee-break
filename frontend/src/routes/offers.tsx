import { createFileRoute } from "@tanstack/react-router";
import OfferList from "../components/offers/OfferList";

export const Route = createFileRoute("/offers")({
  component: RouteComponent,
});

function RouteComponent() {
  return <OfferList />;
}
