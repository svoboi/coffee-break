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
import type { Cafe, PostCoffeeOrder } from "../../types/types";
import { OrderItemServices } from "../../services/OrderItem.service";
import { OrderServices } from "../../services/Order.service";

const DEFAULT_CURRENCY = "CZK";

function Cart() {
  const { isAuthenticated, user } = useLogin();
  const t = translations.cart;
  const navigate = useNavigate();
  const cartItems = useCartStore((state) => state.getCartItems());
  const cartTotal = useCartStore((state) => state.getTotalPrice());
  const clearCart = useCartStore((state) => state.clearCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const [selectedLocationId, setSelectedLocationId] = useState<number | null>(
    null,
  );
  const { data: locations, isLoading: isLoadingLocations } = useGetCafes(true);
  const [isConfirming, setIsConfirming] = useState(false);

  const handleConfirmOrder = async () => {
    if (!isAuthenticated || !user?.id) {
      toast.error(t.loginRequired);
      return;
    }

    if (!selectedLocationId) {
      toast.error(t.locationRequired);
      return;
    }

    if (cartItems.length === 0) {
      toast.error(t.empty);
      return;
    }

    setIsConfirming(true);
    try {
      const createdItems = await Promise.all(
        cartItems.map((item) =>
          OrderItemServices.addOrderItem({
            coffee: { id: item.coffee.id },
            quantity: item.quantity,
          }),
        ),
      );

      const orderPayload: PostCoffeeOrder = {
        state: "NEW",
        customer: { id: user.id },
        items: createdItems.map((item) => ({ id: item.id })),
        cafe: { id: selectedLocationId },
        // Default pickup time 15 minutes from now.
        pickUpTime: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
      };

      await OrderServices.addOrder(orderPayload);

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
                <h1 className="h2">{t.empty}</h1>
                <p className="text-muted mb-4">{t.emptyMessage}</p>
                <Button
                  variant="dark"
                  size="lg"
                  onClick={() => navigate({ to: "/offers" })}
                >
                  {t.browseMenu}
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
              <Card.Title className="mb-4">{t.itemsTitle}</Card.Title>

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
                                    cartItem.quantity - 1,
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
                                    cartItem.quantity + 1,
                                  )
                                }
                              >
                                +
                              </Button>
                            </div>
                          </td>
                          <td className="text-end">
                            {cartItem.coffee.price} {DEFAULT_CURRENCY}
                          </td>
                          <td className="text-end">
                            <strong>
                              {(
                                cartItem.coffee.price * cartItem.quantity
                              ).toFixed(2)}{" "}
                              {DEFAULT_CURRENCY}
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
              <Card.Title className="mb-4">{t.summaryTitle}</Card.Title>

              {/* Subtotal */}
              <Row className="mb-3">
                <Col>{t.subtotal}</Col>
                <Col className="text-end">
                  <strong>
                    {cartTotal.toFixed(2)} {DEFAULT_CURRENCY}
                  </strong>
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
                        e.target.value ? parseInt(e.target.value) : null,
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
                {t.continueShopping}
              </Button>
              <Button
                variant="outline-secondary"
                className="w-100 mt-2"
                onClick={() => clearCart()}
              >
                {t.clearCart}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
