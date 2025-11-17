import { useState } from "react";
import { Spinner, Container, Row, Col, Button } from "react-bootstrap";
import { useGetOrders } from "../../hooks/OrderHooks";
import type { OrderState, CoffeeOrder } from "../../types/types";
import Order from "./Order";
import "./OrderList.css";
import { translations } from "../../i18n/czech";

type OrderStatus = OrderState | "ALL";

function OrderList({ cafeId }: { cafeId: number }) {
  const t = translations.ordersEmployee;
  const { data, isLoading, isError } = useGetOrders(true);
  const orders = data?.filter((order: CoffeeOrder) => order.cafe.id === cafeId);
  const [selectedStatus, setSelectedStatus] = useState<OrderStatus>("ALL");

  const statusFilters: { value: OrderStatus; label: string; icon: string }[] = [
    { value: "ALL", label: t.allOrdersLabel, icon: "📋" },
    { value: "NEW", label: t.newOrders, icon: "🆕" },
    { value: "IN_PROGRESS", label: t.inProgressOrders, icon: "⏳" },
    { value: "READY_TO_PICKUP", label: t.readyOrders, icon: "✅" },
    { value: "COMPLETED", label: t.completedOrders, icon: "✔️" },
    { value: "DECLINED", label: t.declinedOrders, icon: "❌" },
    { value: "UNCLAIMED", label: t.unclaimedOrders, icon: "⚠️" },
  ];

  const filteredOrders = orders
    ? selectedStatus === "ALL"
      ? orders
      : orders.filter((order: CoffeeOrder) => order.state === selectedStatus)
    : [];

  const getStatusCount = (status: OrderStatus) => {
    if (!orders) return 0;
    if (status === "ALL") return orders.length;
    return orders.filter((order: CoffeeOrder) => order.state === status).length;
  };

  // Determine view mode: compact for "ALL", detailed for specific statuses
  const isCompactMode = selectedStatus === "ALL";

  return isLoading ? (
    <Spinner animation="border" />
  ) : isError ? (
    <div>{t.errorLoadingCafes}</div>
  ) : (
    <Container fluid className="orders-page py-4">
      <Row className="mb-5">
        <Col>
          <h2 className="orders-title">{t.title}</h2>
          <p className="orders-subtitle">
            {t.totalOrders} <strong>{orders?.length || 0}</strong>
          </p>
        </Col>
      </Row>

      {/* Status Filter */}
      <Row className="mb-4">
        <Col>
          <div className="filter-section">
            <h6 className="filter-label">{t.filterByStatus}</h6>
            <div className="filter-buttons">
              {statusFilters.map((filter) => (
                <Button
                  key={filter.value}
                  variant={
                    selectedStatus === filter.value ? "dark" : "outline-dark"
                  }
                  className="filter-btn"
                  onClick={() => setSelectedStatus(filter.value)}
                >
                  <span className="filter-icon">{filter.icon}</span>
                  <span className="filter-text">{filter.label}</span>
                  <span className="filter-count">
                    ({getStatusCount(filter.value)})
                  </span>
                </Button>
              ))}
            </div>
          </div>
        </Col>
      </Row>

      {/* Orders List */}
      <Row>
        <Col>
          {filteredOrders.length > 0 ? (
            <div
              className={`order-list ${isCompactMode ? "order-list-compact" : "order-list-detailed"}`}
            >
              {filteredOrders.map((order: CoffeeOrder) => (
                <Order key={order.id} order={order} compact={isCompactMode} />
              ))}
            </div>
          ) : (
            <div className="no-orders">
              <div className="no-orders-icon">📭</div>
              <h4>{t.noOrdersFound}</h4>
              <p>
                {selectedStatus === "ALL" ? t.noOrdersYet : t.noOrdersFiltered}
              </p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default OrderList;
