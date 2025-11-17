import { createFileRoute } from "@tanstack/react-router";
import LocationList from "../components/locations/LocationList";

export const Route = createFileRoute("/locations")({
  component: RouteComponent,
});

function RouteComponent() {
  return <LocationList title="Seznam kaváren" />;
}
