import { createFileRoute } from "@tanstack/react-router";
import LocationList from "../components/locations/LocationList";
import { translations } from "../i18n/czech";

export const Route = createFileRoute("/employee/locations/all")({
  component: RouteComponent,
});

function RouteComponent() {
  return <LocationList title={translations.locations.listTitle} />;
}
