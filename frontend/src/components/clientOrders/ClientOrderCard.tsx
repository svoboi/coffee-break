import { Card, Badge, Button } from "react-bootstrap";
import { useState } from "react";
import type { CoffeeOrder } from "../../types/types";
import { translations } from "../../i18n/czech";
import "./ClientOrders.css";

function ClientOrderCard({ order }: { order: CoffeeOrder }) {
  const t = translations.orderCard;
  const [expanded, setExpanded] = useState(false);

  const getStatusBadgeVariant = (state: string) => {
    switch (state) {
      case "NEW":
        return "danger";
      case "IN_PROGRESS":
        return "warning";
      case "READY_TO_PICKUP":
        return "success";
      case "COMPLETED":
        return "secondary";
      case "DECLINED":
        return "dark";
      case "UNCLAIMED":
        return "info";
      default:
        return "secondary";
    }
  };

  const getStatusLabel = (state: string) => {
    return t.status[state as keyof typeof t.status] || state;
  };

  const calculateTotalPrice = () => {
    return order.items.reduce((sum, item) => {
      return sum + (item.coffee?.price || 0) * item.quantity;
    }, 0);
  };

  const calculateTotalItems = () => {
    return order.items.reduce((sum, item) => sum + item.quantity, 0);
  };

  const pickupTimeObj = new Date(order.pickUpTime);
  const timeUntilPickup = pickupTimeObj.getTime() - new Date().getTime();
  const isUrgent = timeUntilPickup > 0 && timeUntilPickup < 30 * 60 * 1000;
  const isOverdue = timeUntilPickup < 0;

  const formatTime = (date: Date | string) => {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    return dateObj.toLocaleTimeString("cs-CZ", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDate = (date: Date | string) => {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    return dateObj.toLocaleDateString("cs-CZ", {
      month: "short",
      day: "numeric",
    });
  };

  if (expanded) {
    // EXPANDED VIEW
    return (
      <Card
        className="client-order-card expanded border-dark"
        role="region"
        aria-label={`{t.order} #${order.id} details`}
      >
        <Card.Body className="client-order-body expanded">
          {/* Header */}
          <div className="client-order-header">
            <div className="order-info">
              <h2 className="order-number h6">
                {t.order} #{order.id}
              </h2>
              <small className="order-date">
                {formatDate(order.createdAt)}
              </small>
            </div>
            <button
              className="expand-toggle"
              onClick={() => setExpanded(false)}
              title="Collapse"
              aria-label="Collapse order details"
              aria-expanded="true"
            >
              <i className="bi bi-chevron-up" aria-hidden="true"></i>
            </button>
          </div>

          {/* Status Badge */}
          <Badge
            bg={getStatusBadgeVariant(order.state)}
            className={`status-badge ${isUrgent ? "urgent-pulse" : ""} ${
              isOverdue ? "overdue-blink" : ""
            }`}
          >
            {getStatusLabel(order.state)}
          </Badge>

          {/* Cafe Name */}
          <div className="order-cafe-info mt-3 mb-3">
            <small className="text-muted">{t.cafe}:</small>
            <p className="cafe-name">{order.cafe.name}</p>
          </div>

          {/* Items List */}
          <div className="order-items-expanded mb-3">
            <small className="text-muted">{t.items}:</small>
            {order.items.map((item) => (
              <div key={item.id} className="item-row expanded">
                <span className="item-name">
                  {item.coffee?.name} <strong>x{item.quantity}</strong>
                </span>
                <span className="item-price">
                  {((item.coffee?.price || 0) * item.quantity).toFixed(2)} CZK
                </span>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="order-total mb-3">
            <span className="total-label">{t.total}:</span>
            <span className="total-price">
              {calculateTotalPrice().toFixed(2)} CZK
            </span>
          </div>

          {/* Timing Info */}
          <div className="order-timing mb-3">
            <div className="timing-item">
              <small className="timing-label">{t.ordered}:</small>
              <p className="timing-value">{formatTime(order.createdAt)}</p>
            </div>
            <div className="timing-item">
              <small className="timing-label">{t.pickup}:</small>
              <p className="timing-value">{formatTime(order.pickUpTime)}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="order-actions">
            {order.state === "NEW" && (
              <Button
                variant="danger"
                size="sm"
                className="w-100"
                onClick={() => {
                  // TODO: Call backend to cancel order
                  console.log("Cancel order:", order.id);
                }}
              >
                ✕ Cancel Order
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    );
  }

  // COMPACT VIEW
  return (
    <Card
      className={`client-order-card compact border-dark ${
        isUrgent ? "urgent-border" : ""
      } ${isOverdue ? "overdue-border" : ""}`}
      onClick={() => setExpanded(true)}
      role="button"
      tabIndex={0}
      aria-label={`${t.order} #${order.id} from ${order.cafe.name}, ${order.state.replace(/_/g, " ")}`}
      aria-expanded="false"
      onKeyPress={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setExpanded(true);
        }
      }}
    >
      <Card.Body className="client-order-body compact">
        {/* Compact Header */}
        <div className="client-order-header compact">
          <div className="order-info">
            <h2 className="order-number h6">
              {t.order} #{order.id}
            </h2>
            <small className="order-cafe">{order.cafe.name}</small>
          </div>
          <button
            className="expand-toggle"
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(true);
            }}
            title="Expand"
            aria-label="Expand order details"
            aria-expanded="false"
          >
            <i className="bi bi-chevron-down" aria-hidden="true"></i>
          </button>
        </div>

        {/* Status Badge */}
        <Badge
          bg={getStatusBadgeVariant(order.state)}
          className={`status-badge-compact ${isUrgent ? "urgent-pulse" : ""} ${
            isOverdue ? "overdue-blink" : ""
          }`}
        >
          {getStatusLabel(order.state)}
        </Badge>

        {/* Items Summary */}
        <div className="items-summary mt-2 mb-2">
          <small className="summary-text">
            {calculateTotalItems()}{" "}
            {calculateTotalItems() === 1 ? t.item : t.itemPlural} •{" "}
            {calculateTotalPrice().toFixed(2)} CZK
          </small>
        </div>

        {/* Timing Info (Compact) */}
        <div className="timing-info-compact">
          <small className="timing-compact">
            🕐 {formatTime(order.createdAt)} → {formatTime(order.pickUpTime)}
          </small>
        </div>

        {/* Urgency Indicator */}
        {isUrgent && (
          <div className="urgency-indicator">
            <small className="urgency-text">{t.pickupSoon}</small>
          </div>
        )}
        {isOverdue && (
          <div className="overdue-indicator">
            <small className="overdue-text">{t.pastPickup}</small>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default ClientOrderCard;
