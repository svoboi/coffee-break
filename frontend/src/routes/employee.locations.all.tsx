import { createFileRoute } from "@tanstack/react-router";
import LocationList from "../components/locations/LocationList";

export const Route = createFileRoute("/employee/locations/all")({
  component: RouteComponent,
});

function RouteComponent() {
  return <LocationList title="Seznam kaváren" />;
}
