import { createFileRoute } from "@tanstack/react-router";
import EditOffer from "../components/offers/EditOffer";
import { Row } from "react-bootstrap";

export const Route = createFileRoute("/employee/offers/new")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Row className="mb-5 xs align-items-center justify-content-center">
      <EditOffer offer={null} />
    </Row>
  );
}
