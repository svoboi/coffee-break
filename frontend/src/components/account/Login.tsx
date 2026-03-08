import { Button, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useLogin } from "../../hooks/useLoginHook";
import type { UserRole } from "../../types/types";
import { useNavigate } from "@tanstack/react-router";
import { translations } from "../../i18n/czech";
import { useCartStore } from "../../stores/useCartStore";

function Login({ onSetIsLogin }: { onSetIsLogin: (v: boolean) => void }) {
  const t = translations.login;
  const { login } = useLogin();
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const cartItems = useCartStore((state) => state.getCartItems());

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement>,
    userRole: UserRole
  ) => {
    e.preventDefault();
    const form = (e.target as HTMLButtonElement).closest(
      "form"
    ) as HTMLFormElement;

    if (!form.checkValidity()) {
      setValidated(true);
      return;
    }

    try {
      await login(formData.email, formData.password, userRole);
      setFormData({ email: "", password: "" });
      setValidated(false);

      // Navigate based on user role (don't check user state, it updates async)
      if (userRole === "CUSTOMER") {
        if (cartItems.length !== 0) navigate({ to: "/cart" });
        else navigate({ to: "/" });
      } else if (userRole === "CAFE_EMPLOYEE") {
        navigate({ to: "/employee/dashboard", mask: { to: "/dashboard" } });
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <Form
      className="mt-4 mx-auto"
      noValidate
      validated={validated}
      style={{ width: "100%", maxWidth: "500px" }}
      role="form"
      aria-label="Login form"
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{t.username}</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder={t.username}
          value={formData.email}
          onChange={handleInputChange}
          required
          isInvalid={validated && !formData.email}
          aria-required="true"
          aria-describedby={
            validated && !formData.email ? "emailError" : undefined
          }
        />
        <Form.Control.Feedback type="invalid" id="emailError">
          {t.errors.username}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{t.password}</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder={t.password}
          value={formData.password}
          onChange={handleInputChange}
          required
          isInvalid={validated && !formData.password}
          aria-required="true"
          aria-describedby={
            validated && !formData.password ? "passwordError" : undefined
          }
        />
        <Form.Control.Feedback type="invalid" id="passwordError">
          {t.errors.password}
        </Form.Control.Feedback>
      </Form.Group>

      <Row className="text-center flex-column flex-lg-row">
        <Col className="mb-2">
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => handleSubmit(e, "CUSTOMER")}
            aria-label={t.signin}
          >
            {t.signin} - {t.customer}
          </Button>
        </Col>
        <Col className="mb-2">
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => handleSubmit(e, "CAFE_EMPLOYEE")}
            aria-label={t.signin}
          >
            {t.signin} - {t.employee}
          </Button>
        </Col>
        <Col>
          <Button
            variant="link"
            onClick={() => {
              onSetIsLogin(false);
            }}
          >
            {t.signup} {t.register}
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default Login;
