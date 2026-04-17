import { Container, Row, Col, Spinner, Button } from "react-bootstrap";
import { useLogin } from "../../hooks/useLoginHook";
import { useState } from "react";
import { translations } from "../../i18n/czech";
import { useGetUserOrders } from "../../hooks/UserHooks";

import type { OrderState, CoffeeOrder } from "../../types/types";
import "./ClientOrders.css";
import ClientOrderCard from "./ClientOrderCard";
import { getStatusLabel } from "../../utils/getStatusLabel";

const t = translations.ordersClient;

const STATUS_FILTERS: OrderState[] = [
  "NEW",
  "IN_PROGRESS",
  "READY_TO_PICKUP",
  "COMPLETED",
  "DECLINED",
];

function ClientOrders() {
  const { user } = useLogin();
  const {
    data: userOrders = [],
    isLoading,
    isError,
  } = useGetUserOrders(!!user, user?.id);
  const [selectedStatus, setSelectedStatus] = useState<OrderState | "ALL">(
    "ALL",
  );

  // Filter by status
  const filteredOrders =
    selectedStatus === "ALL"
      ? userOrders
      : userOrders.filter(
          (order: CoffeeOrder) => order.state === selectedStatus,
        );

  if (!user) {
    return (
      <Container className="py-5 text-center">
        <h1 className="h3">{t.notLoggedIn}</h1>
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">{t.loadingOrders}</span>
        </Spinner>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container className="py-5 text-center">
        <h1 className="h4">{t.errorLoading}</h1>
      </Container>
    );
  }

  return (
    <Container fluid className="client-orders-page py-4">
      {/* Page Header */}
      <Row className="mb-4">
        <Col>
          <div className="client-orders-header">
            <h1 className="orders-title h2">{t.title}</h1>
            <p className="orders-subtitle">{t.subtitle}</p>
          </div>
        </Col>
      </Row>

      {/* Status Filter Buttons */}
      <Row className="mb-4">
        <Col>
          <div className="status-filter-container">
            <Button
              onClick={() => setSelectedStatus("ALL")}
              variant={selectedStatus === "ALL" ? "dark" : "outline-dark"}
              className="status-filter-btn"
              size="sm"
            >
              {t.all} ({userOrders.length})
            </Button>
            {STATUS_FILTERS.map((status) => {
              const count = userOrders.filter(
                (order: CoffeeOrder) => order.state === status,
              ).length;
              return (
                <Button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  variant={selectedStatus === status ? "dark" : "outline-dark"}
                  className="status-filter-btn"
                  size="sm"
                >
                  {getStatusLabel(status)} ({count})
                </Button>
              );
            })}
          </div>
        </Col>
      </Row>

      {/* Orders Grid */}
      {filteredOrders.length > 0 ? (
        <Row className="g-3">
          {filteredOrders.map((order: CoffeeOrder) => (
            <Col key={order.id} xs={12} sm={6} lg={4} xl={3}>
              <ClientOrderCard order={order} />
            </Col>
          ))}
        </Row>
      ) : (
        <Row>
          <Col className="text-center">
            <div className="empty-state">
              <div className="empty-state-icon">☕</div>
              <h2 className="h4">{t.noOrders}</h2>
              <p>
                {selectedStatus === "ALL"
                  ? t.noOrdersMessage
                  : `${t.noOrdersFiltered} "${getStatusLabel(selectedStatus as OrderState)}"`}
              </p>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default ClientOrders;
