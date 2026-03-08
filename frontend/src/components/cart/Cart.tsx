import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Table,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "react-toastify";
import { useCartStore } from "../../stores/useCartStore";
import { translations } from "../../i18n/czech";
import "./Cart.css";
import { useGetCafes } from "../../hooks/CafeHooks";
import { useLogin } from "../../hooks/useLoginHook";
import type { Cafe } from "../../types/types";

function Cart() {
  const { isAuthenticated } = useLogin();
  const t = translations.cart;
  const navigate = useNavigate();
  const cartItems = useCartStore((state) => state.getCartItems());
  const cartTotal = useCartStore((state) => state.getTotalPrice());
  const clearCart = useCartStore((state) => state.clearCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const [selectedLocationId, setSelectedLocationId] = useState<number | null>(
    null
  );
  const { data: locations, isLoading: isLoadingLocations } = useGetCafes(true);
  const [isConfirming, setIsConfirming] = useState(false);

  const handleConfirmOrder = async () => {
    if (!selectedLocationId) {
      toast.error(t.locationRequired);
      return;
    }

    if (cartItems.length === 0) {
      toast.error("Váš košík je prázdný");
      return;
    }

    setIsConfirming(true);
    try {
      // TODO: Replace with actual API call
      // const orderData = {
      //   cafeId: selectedLocationId,
      //   items: cartItems.map(item => ({ coffeeId: item.coffee.id, quantity: item.quantity })),
      // };
      // const response = await OrderServices.create(orderData);

      if (!isAuthenticated) {
        toast.error("Musíte být přihlášeni k vytvoření objednávky.");
        setIsConfirming(false);
        return;
      }
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success(t.orderSuccess);
      clearCart();
      // Navigate to orders page with "new" filter
      navigate({ to: "/orders", search: { filter: "new" } });
    } catch (error) {
      console.error("Failed to place order:", error);
      toast.error(t.orderError);
    } finally {
      setIsConfirming(false);
    }
  };

  if (cartItems.length === 0 && !isLoadingLocations) {
    return (
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="text-center border-dark p-5">
              <Card.Body>
                <h2>{t.empty}</h2>
                <p className="text-muted mb-4">{t.emptyMessage}</p>
                <Button
                  variant="dark"
                  size="lg"
                  onClick={() => navigate({ to: "/offers" })}
                >
                  Procházet menu
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <h1>{t.title}</h1>
          <p className="text-muted">{t.subtitle}</p>
        </Col>
      </Row>

      <Row className="g-4">
        {/* Cart Items */}
        <Col lg={8}>
          <Card className="border-dark">
            <Card.Body>
              <Card.Title className="mb-4">Položky v košíku</Card.Title>

              {cartItems.length === 0 ? (
                <Alert variant="info">{t.empty}</Alert>
              ) : (
                <div className="table-responsive">
                  <Table borderless hover>
                    <thead>
                      <tr>
                        <th>{t.items}</th>
                        <th className="text-end">{t.quantity}</th>
                        <th className="text-end">{t.unitPrice}</th>
                        <th className="text-end">{t.total}</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((cartItem) => (
                        <tr key={cartItem.id}>
                          <td>
                            <strong>{cartItem.coffee.name}</strong>
                          </td>
                          <td>
                            <div className="d-flex justify-content-end gap-2">
                              <Button
                                variant="outline-dark"
                                size="sm"
                                onClick={() =>
                                  updateQuantity(
                                    cartItem.id,
                                    cartItem.quantity - 1
                                  )
                                }
                                disabled={cartItem.quantity <= 1}
                              >
                                −
                              </Button>
                              <span
                                className="d-inline-block text-center"
                                style={{ width: "2rem" }}
                              >
                                {cartItem.quantity}
                              </span>
                              <Button
                                variant="outline-dark"
                                size="sm"
                                onClick={() =>
                                  updateQuantity(
                                    cartItem.id,
                                    cartItem.quantity + 1
                                  )
                                }
                              >
                                +
                              </Button>
                            </div>
                          </td>
                          <td className="text-end">
                            {cartItem.coffee.price} {cartItem.coffee.currency}
                          </td>
                          <td className="text-end">
                            <strong>
                              {(
                                cartItem.coffee.price * cartItem.quantity
                              ).toFixed(2)}{" "}
                              {cartItem.coffee.currency}
                            </strong>
                          </td>
                          <td>
                            <Button
                              variant="outline-danger"
                              size="sm"
                              onClick={() => removeFromCart(cartItem.id)}
                            >
                              {t.remove}
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>

        {/* Order Summary & Location Selection */}
        <Col lg={4}>
          <Card className="border-dark sticky-top" style={{ top: "1rem" }}>
            <Card.Body>
              <Card.Title className="mb-4">Shrnutí objednávky</Card.Title>

              {/* Subtotal */}
              <Row className="mb-3">
                <Col>{t.subtotal}</Col>
                <Col className="text-end">
                  <strong>{cartTotal.toFixed(2)} CZK</strong>
                </Col>
              </Row>

              <hr />

              {/* Location Selection */}
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">{t.pickupLocation}</Form.Label>

                {isLoadingLocations ? (
                  <div className="text-center py-3">
                    <Spinner animation="border" size="sm" className="me-2" />
                    {t.loadingLocations}
                  </div>
                ) : locations && locations.length === 0 ? (
                  <Alert variant="warning" className="mb-0">
                    {t.noLocationsAvailable}
                  </Alert>
                ) : locations ? (
                  <Form.Select
                    value={selectedLocationId || ""}
                    onChange={(e) =>
                      setSelectedLocationId(
                        e.target.value ? parseInt(e.target.value) : null
                      )
                    }
                    className="border-dark"
                  >
                    <option value="">{t.selectLocation}</option>
                    {locations.map((location: Cafe) => (
                      <option key={location.id} value={location.id}>
                        {location.name}
                      </option>
                    ))}
                  </Form.Select>
                ) : null}

                {locations && selectedLocationId && (
                  <div className="mt-3 p-3 bg-light rounded">
                    <small className="text-muted">
                      {
                        locations.find((l: Cafe) => l.id === selectedLocationId)
                          ?.address
                      }
                    </small>
                  </div>
                )}
              </Form.Group>

              {/* Place Order Button */}
              <Button
                variant="dark"
                size="lg"
                className="w-100"
                onClick={handleConfirmOrder}
                disabled={
                  isConfirming ||
                  !selectedLocationId ||
                  cartItems.length === 0 ||
                  isLoadingLocations
                }
              >
                {isConfirming ? (
                  <>
                    <Spinner animation="border" size="sm" className="me-2" />
                    {t.confirming}
                  </>
                ) : (
                  t.placeOrder
                )}
              </Button>

              <Button
                variant="outline-secondary"
                className="w-100 mt-2"
                onClick={() => navigate({ to: "/offers" })}
              >
                Pokračovat v nákupu
              </Button>
              <Button
                variant="outline-secondary"
                className="w-100 mt-2"
                onClick={() => clearCart()}
              >
                Vyprazdnit košík
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
