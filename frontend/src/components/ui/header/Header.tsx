import { useState } from "react";
import { Button, Col, Container, Row, Offcanvas, Badge } from "react-bootstrap";
import { Link, useNavigate } from "@tanstack/react-router";
import logoWebp from "../../../assets/logo.webp";
import logoPng from "../../../assets/logo-small.png";
import "./Header.css";
import { useLogin } from "../../../hooks/useLoginHook";
import { getLanguage, setLanguage, translations } from "../../../i18n/czech";
import { useCartStore } from "../../../stores/useCartStore";

function Header() {
  const t = translations;
  const [showMenu, setShowMenu] = useState(false);
  const [language, setLanguageState] = useState(getLanguage());
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

  const handleLanguageToggle = () => {
    const nextLanguage = language === "cs" ? "en" : "cs";
    setLanguage(nextLanguage);
    setLanguageState(nextLanguage);
  };

  const languageBadge = language === "cs" ? "🇨🇿 CZ" : "🇬🇧 EN";

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
                    alt={t.header.logoAlt}
                    className="logo-image"
                    width={52}
                    height={52}
                  />
                </picture>
              </Link>
            </Col>

            <Col xs="auto" className="d-flex gap-2 align-items-center">
              <Button
                className="cart-btn"
                variant="outline-dark"
                onClick={() => navigate({ to: "/cart" })}
                aria-label={`${t.header.cartAriaPrefix} ${cartItemCount} ${t.header.cartAriaSuffix}`}
              >
                <span className="cart-icon-wrap">
                  <i className="bi bi-cart" aria-hidden="true"></i>
                  {cartItemCount > 0 && (
                    <Badge bg="danger" className="cart-count-badge">
                      {cartItemCount}
                    </Badge>
                  )}
                </span>
              </Button>

              <Button
                variant="ghost"
                className="menu-btn"
                onClick={() => setShowMenu(true)}
                aria-label={t.header.openNavigationMenu}
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
          <div className="menu-header-controls">
            <Offcanvas.Title className="mb-0">{t.header.menu}</Offcanvas.Title>
            <Button
              variant="outline-dark"
              className="lang-btn"
              onClick={handleLanguageToggle}
              aria-label={`${t.header.language}: ${language === "cs" ? t.header.czech : t.header.english}`}
            >
              {languageBadge}
            </Button>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav className="menu-items" aria-label={t.header.mainNavigation}>
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
