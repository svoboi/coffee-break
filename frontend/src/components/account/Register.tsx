import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useLogin } from "../../hooks/useLoginHook";
import { translations } from "../../i18n/czech";

function Register({ onSetIsLogin }: { onSetIsLogin: (v: boolean) => void }) {
  const t = translations.register;
  const { register, isLoading } = useLogin();
  const [formData, setFormData] = useState({
    realName: "",
    userName: "",
    password: "",
    userRole: "CUSTOMER" as const,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await register({
        realName: formData.realName,
        userName: formData.userName,
        password: formData.password,
        userRole: formData.userRole,
      });
      setFormData({
        realName: "",
        userName: "",
        password: "",
        userRole: "CUSTOMER",
      });
      onSetIsLogin(true);
    } catch {
      // Error toast is handled in store.
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Form className="mt-4 w-50 mx-auto" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="registerRealName">
        <Form.Label>{t.firstName}</Form.Label>
        <Form.Control
          type="text"
          name="realName"
          placeholder={t.firstName}
          value={formData.realName}
          onChange={handleInputChange}
          autoComplete="name"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="registerUserName">
        <Form.Label>{t.email}</Form.Label>
        <Form.Control
          type="email"
          name="userName"
          placeholder={t.email}
          value={formData.userName}
          onChange={handleInputChange}
          autoComplete="email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="registerPassword">
        <Form.Label>{t.password}</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder={t.password}
          value={formData.password}
          onChange={handleInputChange}
          autoComplete="new-password"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="registerRole">
        <Form.Label>{t.role}</Form.Label>
        <Form.Select
          name="userRole"
          value={formData.userRole}
          onChange={handleInputChange}
        >
          <option value="CUSTOMER">{t.customer}</option>
          <option value="CAFE_EMPLOYEE">{t.employee}</option>
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit">
        {isLoading ? "..." : t.title}
      </Button>
      <Button
        variant="link"
        type="button"
        onClick={() => {
          onSetIsLogin(true);
        }}
      >
        {t.already} {t.signin}
      </Button>
    </Form>
  );
}

export default Register;
