import { Spinner, Container, Row, Col, Button } from "react-bootstrap";
import { useGetCafes } from "../../hooks/CafeHooks";
import { useState } from "react";
import { translations } from "../../i18n/czech";
import OrderList from "./OrderList";
import type { Cafe } from "../../types/types";
import "./Orders.css";

function Orders() {
  const t = translations.ordersEmployee;
  const [selectedCafe, setSelectedCafe] = useState<number | null>(null);
  const { data: cafes, isLoading, isError } = useGetCafes(true);

  const selectedCafeData = cafes?.find(
    (cafe: Cafe) => cafe.id === selectedCafe
  );

  return isLoading ? (
    <Spinner animation="border" />
  ) : isError ? (
    <div>{t.errorLoadingCafes}</div>
  ) : (
    <>
      {/* Cafe Selection Menu */}
      <div className="cafe-selector-menu">
        <Container fluid>
          <Row className="align-items-center">
            <Col xs="auto" className="py-3">
              <h5 className="cafe-menu-label">{t.selectCafe}</h5>
            </Col>
            <Col className="py-3">
              <div className="cafe-buttons-scroll">
                {cafes?.map((cafe: Cafe) => (
                  <Button
                    key={cafe.id}
                    onClick={() => setSelectedCafe(cafe.id)}
                    className={`cafe-menu-btn ${
                      selectedCafe === cafe.id ? "active" : ""
                    }`}
                    variant={selectedCafe === cafe.id ? "dark" : "outline-dark"}
                  >
                    <div className="cafe-btn-content">
                      <div className="cafe-btn-name">{cafe.name}</div>
                      <div className="cafe-btn-address">{cafe.address}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Orders List */}
      {selectedCafe && selectedCafeData && (
        <Container fluid className="orders-page py-4">
          <OrderList cafeId={selectedCafe} />
        </Container>
      )}

      {/* Empty State */}
      {!selectedCafe && (
        <Container fluid className="orders-page py-5">
          <Row>
            <Col className="text-center">
              <div className="empty-state">
                <div className="empty-state-icon">☕</div>
                <h3>{t.welcome}</h3>
                <p>{t.selectCafeMessage}</p>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default Orders;
