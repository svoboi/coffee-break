import { Button, Card, Col } from "react-bootstrap";
import type { Coffee } from "../../types/types";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { translations } from "../../i18n/czech";
import { useCartStore } from "../../stores/useCartStore";
import { toast } from "react-toastify";
import { useAddOrderItem } from "../../hooks/OrderItemHooks";

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
  const postOrderItem = useAddOrderItem();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    postOrderItem.mutate(
      {
        coffee: {
          id: offer.id,
        },
        quantity: 1,
      },
      {
        onSuccess: () => {
          addToCart(offer, 1);
          navigate({ to: "/login" });
          toast.success(
            "Přidáno do košíku! Prosím, přihlaste se pro dokončení objednávky.",
          );
        },
      },
    );
  };

  return (
    <Col md={6}>
      <Card className="offer-card h-100 border-dark">
        <Card.Body>
          <Card.Title>{offer.name}</Card.Title>
          <Card.Text className="offer-price">
            {offer.price} {offer.currency}
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
