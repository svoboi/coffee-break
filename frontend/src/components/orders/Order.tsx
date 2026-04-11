import { Button, Card, Col, Row, Badge } from "react-bootstrap";
import { useState } from "react";
import type { CoffeeOrder } from "../../types/types";
import "./Order.css";
import { translations } from "../../i18n/czech";
import { getStatusLabel } from "../../utils/getStatusLabel";

function Order({
  order,
  compact = false,
}: {
  order: CoffeeOrder;
  compact?: boolean;
}) {
  const t = translations.ordersEmployee;
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

  const calculateTotalItems = () => {
    return order.items.reduce((sum, item) => sum + item.quantity, 0);
  };

  const pickupTimeObj = new Date(order.pickUpTime);
  const createdTimeObj = new Date(order.createdAt);
  const isUrgent =
    pickupTimeObj.getTime() - createdTimeObj.getTime() < 30 * 60 * 1000; // Less than 30 minutes

  if (compact) {
    // COMPACT VIEW - Preview Card with expand/collapse
    if (expanded) {
      // EXPANDED COMPACT VIEW - Show full details in card format
      return (
        <Card className="order-card order-card-compact order-card-expanded border-dark">
          <Card.Body className="order-body-compact expanded">
            {/* Header with collapse button */}
            <div className="expanded-header">
              <div className="compact-order-info">
                <h3 className="compact-order-id h6">
                  {t.order} #{order.id}{" "}
                  <small className="text-muted">
                    pro {order.customer.realName}
                  </small>
                </h3>
                <Badge
                  bg={getStatusBadgeVariant(order.state)}
                  className="compact-badge mt-2 mb-3"
                >
                  {getStatusLabel(order.state)}
                </Badge>
              </div>
              <button
                className="expand-toggle"
                onClick={() => setExpanded(false)}
                title={t.collapseDetails}
              >
                <i className="bi bi-chevron-up"></i>
              </button>
            </div>

            {/* Items list */}
            <div className="expanded-section mb-3">
              <h4 className="expanded-section-title h6">📝 {t.items}</h4>
              <div className="expanded-items">
                {order.items.map((item) =>
                  item.coffee ? (
                    <div key={item.id} className="expanded-item">
                      <span className="expanded-item-name">
                        {item.coffee.name}
                      </span>
                      <span className="expanded-item-qty">
                        x{item.quantity}
                      </span>
                      <span className="expanded-item-price">
                        {(item.coffee.price * item.quantity).toFixed(2)}{" "}
                        {item.coffee.currency}
                      </span>
                    </div>
                  ) : null,
                )}
              </div>
              <div className="expanded-total">
                <strong>
                  {t.totalItems} {calculateTotalItems()}
                </strong>
              </div>
            </div>

            {/* Timing */}
            <div className="expanded-section mb-3">
              <h4 className="expanded-section-title h6">{t.timing}</h4>
              <div className="expanded-timing">
                <div className="timing-item">
                  <span>{t.orderPlaced}</span>
                  <strong>
                    {createdTimeObj.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </strong>
                </div>
                <div className="timing-item">
                  <span>{t.pickUpTime}</span>
                  <strong>
                    {pickupTimeObj.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </strong>
                </div>
                {isUrgent && (
                  <div className="timing-item urgent">
                    <span>{t.urgentIndicator}:</span>
                    <strong>
                      {Math.round(
                        (pickupTimeObj.getTime() - new Date().getTime()) /
                          60000,
                      )}{" "}
                      {t.minutes}
                    </strong>
                  </div>
                )}
              </div>
            </div>

            {/* Action buttons */}
            <div className="expanded-actions">
              {order.state === "NEW" && (
                <>
                  <Button
                    variant="success"
                    size="sm"
                    className="expanded-action-btn"
                  >
                    {t.acceptOrder}
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    className="expanded-action-btn"
                  >
                    {t.rejectOrder}
                  </Button>
                </>
              )}
              {order.state === "IN_PROGRESS" && (
                <Button
                  variant="primary"
                  size="sm"
                  className="expanded-action-btn"
                >
                  {t.markReady}
                </Button>
              )}
            </div>
          </Card.Body>
        </Card>
      );
    }

    // COLLAPSED COMPACT VIEW
    return (
      <Card className="order-card order-card-compact mb-3 border-dark">
        <Card.Body className="order-body-compact">
          <div className="compact-header">
            <div className="compact-order-info">
              <h3 className="compact-order-id h6">
                {t.order} #{order.id}{" "}
                <small className="text-muted">
                  pro {order.customer.realName}
                </small>
              </h3>
              <Badge
                bg={getStatusBadgeVariant(order.state)}
                className="compact-badge"
              >
                {getStatusLabel(order.state)}
              </Badge>
            </div>
            <button
              className="expand-toggle"
              onClick={() => setExpanded(true)}
              title={t.expandDetails}
            >
              <i className="bi bi-chevron-down"></i>
            </button>
          </div>

          <div className="compact-items mt-3 mb-3">
            {order.items.slice(0, 2).map((item) =>
              item.coffee ? (
                <div key={item.id} className="compact-item">
                  <span className="compact-item-name">{item.coffee.name}</span>
                  <span className="compact-item-qty">x{item.quantity}</span>
                </div>
              ) : null,
            )}
            {order.items.length > 2 && (
              <div className="compact-more-items">
                +{order.items.length - 2}{" "}
                {order.items.length > 3 ? t.moreItemsPlural : t.moreItems}
              </div>
            )}
          </div>

          <div className="compact-footer">
            <span className="compact-time">
              🕐{" "}
              {pickupTimeObj.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
            {isUrgent && <span className="compact-urgent">{t.urgent}</span>}
          </div>
        </Card.Body>
      </Card>
    );
  }

  // FULL VIEW - Standard Card
  return (
    <Card className="order-card mb-4 border-dark">
      {/* Header with Status */}
      <Card.Header className="order-header bg-white border-dark d-flex justify-content-between align-items-center">
        <div>
          <h3 className="order-id mb-1 h5">
            {t.order} #{order.id}
          </h3>
          <small className="text-muted">
            Customer: <strong>{order.customer.realName}</strong>
          </small>
        </div>
        <div className="text-end">
          <Badge
            bg={getStatusBadgeVariant(order.state)}
            className="order-status-badge fs-6"
          >
            {getStatusLabel(order.state)}
          </Badge>
          {isUrgent && order.state === "NEW" && (
            <div className="urgent-indicator mt-2">
              <Badge bg="danger" className="blink">
                {t.urgentIndicator}
              </Badge>
            </div>
          )}
        </div>
      </Card.Header>

      <Card.Body className="order-body">
        {/* Main Content - Two columns */}
        <Row className="mb-4">
          {/* Left Column - Items List */}
          <Col lg={7}>
            <div className="items-section">
              <h4 className="section-title h6">{t.orderItems}</h4>
              <div className="items-list">
                {order.items.map((item) =>
                  item.coffee ? (
                    <div key={item.id} className="item-row">
                      <div className="item-info">
                        <span className="item-name">{item.coffee.name}</span>
                        <span className="item-price">
                          {item.coffee.price} {item.coffee.currency}
                        </span>
                      </div>
                      <div className="item-quantity">
                        <span className="quantity-badge">{item.quantity}x</span>
                      </div>
                    </div>
                  ) : null,
                )}
              </div>
              <div className="items-summary mt-3 pt-3 border-top">
                <strong>
                  {t.totalItems} {calculateTotalItems()}
                </strong>
              </div>
            </div>
          </Col>

          {/* Right Column - Order Details */}
          <Col lg={5}>
            <div className="details-section">
              <h4 className="section-title h6">{t.timing}</h4>
              <div className="detail-item">
                <span className="detail-label">{t.orderPlaced}</span>
                <span className="detail-value">
                  {createdTimeObj.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">{t.pickUpTime}</span>
                <span className="detail-value pickup-time">
                  {pickupTimeObj.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              {isUrgent && (
                <div className="detail-item urgent-note">
                  <span className="detail-label">{t.pickupIn}</span>
                  <span className="detail-value">
                    {Math.round(
                      (pickupTimeObj.getTime() - new Date().getTime()) / 60000,
                    )}{" "}
                    {t.minutes}
                  </span>
                </div>
              )}
            </div>
          </Col>
        </Row>

        {/* Action Buttons */}
        <Row className="button-section border-top pt-3">
          <Col>
            <div className="d-flex gap-2 flex-wrap">
              {order.state === "NEW" && (
                <>
                  <Button
                    variant="success"
                    size="lg"
                    className="action-btn accept-btn"
                  >
                    {t.acceptOrder}
                  </Button>
                  <Button
                    variant="danger"
                    size="lg"
                    className="action-btn reject-btn"
                  >
                    {t.rejectOrder}
                  </Button>
                </>
              )}

              {order.state === "IN_PROGRESS" && (
                <Button
                  variant="primary"
                  size="lg"
                  className="action-btn ready-btn"
                >
                  {t.markReady}
                </Button>
              )}

              {order.state === "READY_TO_PICKUP" && (
                <>
                  <Button
                    variant="info"
                    size="lg"
                    className="action-btn"
                    disabled
                  >
                    {t.waitingCustomer}
                  </Button>
                  <Button variant="secondary" size="lg" className="action-btn">
                    {t.orderPickedUp}
                  </Button>
                </>
              )}

              {order.state === "COMPLETED" && (
                <Button
                  variant="secondary"
                  size="lg"
                  disabled
                  className="action-btn"
                >
                  {t.orderCompleted}
                </Button>
              )}

              {order.state === "DECLINED" && (
                <Button
                  variant="dark"
                  size="lg"
                  disabled
                  className="action-btn"
                >
                  {t.orderDeclined}
                </Button>
              )}

              {order.state === "UNCLAIMED" && (
                <Button
                  variant="info"
                  size="lg"
                  disabled
                  className="action-btn"
                >
                  {t.orderUnclaimed}
                </Button>
              )}
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Order;
