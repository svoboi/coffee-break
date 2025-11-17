import { createFileRoute } from "@tanstack/react-router";
import EditLocation from "../components/locations/EditLocation";
import { Row } from "react-bootstrap";

export const Route = createFileRoute("/employee/locations/new")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Row className="mb-5 xs align-items-center justify-content-center">
      <EditLocation cafe={null} />
    </Row>
  );
}
