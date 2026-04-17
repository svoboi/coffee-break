import { Button, Card, Col } from "react-bootstrap";
import type { Coffee } from "../../types/types";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { translations } from "../../i18n/czech";
import { useCartStore } from "../../stores/useCartStore";
import { toast } from "react-toastify";
import { useLogin } from "../../hooks/useLoginHook";

const DEFAULT_CURRENCY = "CZK";

function ViewOffer({
  offer,
  onChangeViewMode,
}: {
  offer: Coffee;
  onChangeViewMode: () => void;
}) {
  const t = translations.offers;
  const location = useLocation();
  const isEmployeeView = location.pathname.includes("employee");
  const addToCart = useCartStore((state) => state.addToCart);
  const { isAuthenticated } = useLogin();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(offer, 1);

    if (!isAuthenticated) {
      navigate({ to: "/login" });
      toast.success(t.addedToCartLoginRequired);
      return;
    }

    toast.success(t.addedToCart);
  };

  return (
    <Col md={6}>
      <Card className="offer-card h-100 border-dark">
        <Card.Body>
          <Card.Title>{offer.name}</Card.Title>
          <Card.Text className="offer-price">
            {offer.price} {DEFAULT_CURRENCY}
          </Card.Text>
          <Button
            variant="dark"
            className="w-100"
            onClick={isEmployeeView ? onChangeViewMode : handleAddToCart}
          >
            {isEmployeeView ? t.edit : t.order}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ViewOffer;
