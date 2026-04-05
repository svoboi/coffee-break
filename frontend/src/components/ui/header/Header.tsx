import { useState } from "react";
import { Button, Col, Container, Row, Offcanvas, Badge } from "react-bootstrap";
import { Link, useNavigate } from "@tanstack/react-router";
import logoWebp from "../../../assets/logo.webp";
import logoPng from "../../../assets/logo-small.png";
import "./Header.css";
import { useLogin } from "../../../hooks/useLoginHook";
import { translations } from "../../../i18n/czech";
import { useCartStore } from "../../../stores/useCartStore";

function Header() {
  const t = translations;
  const [showMenu, setShowMenu] = useState(false);
  const { user, isAuthenticated, logout } = useLogin();
  const navigate = useNavigate();
  const cartItemCount = useCartStore((state) => state.getTotalItems());

  const menuItemsUniversal = [
    { label: t.header.home, path: "/" },
    { label: t.header.locations, path: "/locations" },
    { label: t.header.menu, path: "/offers" },
    { label: t.header.contact, path: "/contact" },
    { label: t.header.login, path: "/login" },
  ];

  const menuItemsCustomer = [
    { label: t.header.cart, path: "/cart" },
    { label: t.header.orders, path: "/orders" },
    { label: t.header.account, path: "/account" },
  ];

  const menuItemsEmployee = [
    { label: t.header.dashboard, path: "/employee/dashboard" },
    { label: t.header.manageLocations, path: "/employee/locations/all" },
    { label: t.header.manageMenu, path: "/employee/offers/all" },
    { label: t.header.account, path: "/account" },
  ];

  const handleLogout = async () => {
    await logout();
    setShowMenu(false);
    navigate({ to: "/" });
  };

  return (
    <>
      <Container fluid className="header-section py-4">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col xs="auto">
              <Link
                to={
                  user && user.userRole === "CAFE_EMPLOYEE"
                    ? "/employee/dashboard"
                    : "/"
                }
                mask={
                  user && user.userRole === "CAFE_EMPLOYEE"
                    ? { to: "/dashboard" }
                    : undefined
                }
              >
                <picture>
                  <source srcSet={logoWebp} type="image/webp" />
                  <img
                    src={logoPng}
                    alt="Coffee Break Logo"
                    className="logo-image"
                    width={40}
                    height={40}
                  />
                </picture>
              </Link>
            </Col>

            <Col xs="auto">
              <Button
                className="me-3 position-relative"
                variant="ghost"
                onClick={() => navigate({ to: "/cart" })}
                aria-label={`Cart with ${cartItemCount} items`}
              >
                <i className="bi bi-cart" aria-hidden="true"></i>
                {cartItemCount > 0 && (
                  <Badge
                    bg="danger"
                    className="position-absolute top-0 start-100 translate-middle"
                  >
                    {cartItemCount}
                  </Badge>
                )}
              </Button>

              <Button
                variant="outline-dark"
                className="menu-btn"
                onClick={() => setShowMenu(true)}
                aria-label="Open navigation menu"
                aria-controls="offcanvasMenu"
                aria-expanded={showMenu}
              >
                <i className="bi bi-list" aria-hidden="true"></i>
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Menu Offcanvas */}
      <Offcanvas
        show={showMenu}
        onHide={() => setShowMenu(false)}
        placement="end"
        className="menu-offcanvas"
        id="offcanvasMenu"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav className="menu-items" aria-label="Main navigation">
            {!user &&
              menuItemsUniversal.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setShowMenu(false)}
                  className="menu-link"
                >
                  {item.label}
                </Link>
              ))}
            {user &&
              user.userRole === "CUSTOMER" &&
              menuItemsCustomer.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setShowMenu(false)}
                  className="menu-link"
                >
                  {item.label}
                </Link>
              ))}
            {user &&
              user.userRole === "CAFE_EMPLOYEE" &&
              menuItemsEmployee.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setShowMenu(false)}
                  className="menu-link"
                  mask={
                    item.path === "/employee/locations/all"
                      ? { to: "/locations" }
                      : item.path === "/employee/offers"
                        ? { to: "/offers" }
                        : undefined
                  }
                >
                  {item.label}
                </Link>
              ))}
          </nav>
          {isAuthenticated && (
            <Button
              onClick={handleLogout}
              className="logout-btn"
              aria-label={`${t.header.logout} (${user?.realName})`}
            >
              {t.header.logout}
            </Button>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;
