import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { useState } from "react";
import { useLogin } from "../../hooks/useLoginHook";
import { translations } from "../../i18n/czech";
import "./AccountDetails.css";

function AccountDetails() {
  const t = translations.account;
  const { user, logout } = useLogin();
  const [isEditing, setIsEditing] = useState(false);

  if (!user) {
    return (
      <Container className="py-5 text-center">
        <h3>{t.notLoggedIn}</h3>
      </Container>
    );
  }

  return (
    <Container className="account-details-container py-5">
      <Row className="justify-content-center">
        <Col lg={6} md={8}>
          <Card className="account-card border-dark shadow-sm">
            <Card.Header className="account-header bg-light border-dark">
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="mb-0">{t.title}</h4>
                <Badge bg="primary">
                  {" "}
                  {user.userRole === "CUSTOMER" && t.customer}
                  {user.userRole === "CAFE_EMPLOYEE" && t.employee}
                  {user.userRole === "ADMIN" && t.admin}
                </Badge>
              </div>
            </Card.Header>

            <Card.Body className="account-body">
              {/* User Info Section */}
              <div className="info-section mb-4">
                <div className="info-item">
                  <span className="info-label">{t.realName}</span>
                  <p className="info-value">{user.realName}</p>
                </div>

                <div className="info-item">
                  <span className="info-label">{t.username}</span>
                  <p className="info-value">{user.userName}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="account-actions">
                <Button
                  variant={isEditing ? "secondary" : "dark"}
                  className="w-100 mb-2"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  {isEditing ? "✕ " + t.cancel : t.editProfile}
                </Button>
                <Button
                  variant="outline-danger"
                  className="w-100"
                  onClick={async () => {
                    await logout().catch((err: unknown) =>
                      console.error("Logout error:", err)
                    );
                  }}
                >
                  {t.logout}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AccountDetails;
