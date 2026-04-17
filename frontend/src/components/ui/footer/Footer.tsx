import { Container, Row, Col } from "react-bootstrap";
import { Link } from "@tanstack/react-router";
import "./Footer.css";
import { translations } from "../../../i18n/czech";

function Footer() {
  const t = translations.footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <Container fluid className="footer-content py-5">
        <Row className="mb-4">
          {/* Brand Section */}
          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <div className="footer-brand">
              <p className="footer-logo">☕ CoffeeBreak</p>
              <p className="footer-tagline">{t.tagline}</p>
              <div className="footer-social">
                <a href="#" className="social-link" title={t.facebook}>
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="social-link" title={t.instagram}>
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="social-link" title={t.twitter}>
                  <i className="bi bi-twitter"></i>
                </a>
              </div>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <div className="footer-section">
              <h2 className="footer-section-title h6">{t.quickLinks}</h2>
              <ul className="footer-links">
                <li>
                  <Link to="/">{t.home}</Link>
                </li>
                <li>
                  <Link to="/locations">{t.locations}</Link>
                </li>
                <li>
                  <Link to="/offers">{t.menu}</Link>
                </li>
                <li>
                  <Link to="/orders">{t.orders}</Link>
                </li>
              </ul>
            </div>
          </Col>

          {/* Company */}
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <div className="footer-section">
              <h2 className="footer-section-title h6">{t.company}</h2>
              <ul className="footer-links">
                <li>
                  <a href="#about">{t.about}</a>
                </li>
                <li>
                  <a href="#careers">{t.careers}</a>
                </li>
              </ul>
            </div>
          </Col>

          {/* Contact */}
          <Col lg={3} md={6}>
            <div className="footer-section">
              <h2 className="footer-section-title h6">{t.contact}</h2>
              <div className="footer-contact">
                <p>
                  <i className="bi bi-telephone"></i> {t.phone}
                </p>
                <p>
                  <i className="bi bi-envelope"></i> {t.email}
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Divider */}
        <hr className="footer-divider" />

        {/* Bottom Section */}
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="footer-copyright">
              © {currentYear} CoffeeBreak. {t.copyright}
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <div className="footer-legal">
              <a href="#privacy">{t.privacy}</a>
              <span className="separator">•</span>
              <a href="#terms">{t.terms}</a>
              <span className="separator">•</span>
              <a href="#cookies">{t.cookies}</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
