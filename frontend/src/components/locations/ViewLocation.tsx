import { Button, Card, Col } from "react-bootstrap";
import type { Cafe } from "../../types/types";
import { useLocation } from "@tanstack/react-router";
import { translations } from "../../i18n/czech";

function ViewLocation({
  cafe,
  onChangeViewMode,
  onSetSelectedCafeId,
}: {
  cafe: Cafe;
  onChangeViewMode: () => void;
  onSetSelectedCafeId: (id: number) => void;
}) {
  const t = translations.locations;
  const location = useLocation();
  const isEmployeeView = location.pathname.includes("employee");
  return (
    <Col md={6} key={cafe.id}>
      <Card className="cafe-card h-100 border-dark">
        <Card.Body>
          <Card.Title>{cafe.name}</Card.Title>
          <Card.Text>{cafe.description}</Card.Text>
          <Card.Text className="text-muted small">{cafe.address}</Card.Text>
          <Button
            variant="dark"
            className="w-100"
            onClick={
              isEmployeeView
                ? onChangeViewMode
                : () => onSetSelectedCafeId(cafe.id)
            }
          >
            {isEmployeeView ? t.edit : t.view}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ViewLocation;
