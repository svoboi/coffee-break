import { createFileRoute } from "@tanstack/react-router";
import Home from "../components/home/Home";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Home />;
}
