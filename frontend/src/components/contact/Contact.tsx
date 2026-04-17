import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useState } from "react";
import "./Contact.css";
import { translations } from "../../i18n/czech";
import { toast } from "react-toastify";

function Contact() {
  const t = translations.contact;
  const common = translations.common;
  const contactEmail = "support@coffeebreak.com";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [validated, setValidated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      setValidated(true);
      return;
    }

    setIsSubmitting(true);
    try {
      // TODO: Send to backend API
      // For now, just show success message
      toast.success(t.formSuccess);
      setFormData({ fullName: "", email: "", subject: "", message: "" });
      setValidated(false);
    } catch (error) {
      console.error("Failed to submit form:", error);
      toast.error(t.formError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container className="contact-page py-5">
      {/* Header */}
      <Row className="mb-5">
        <Col>
          <h1 className="contact-title">☕ CoffeeBreak - {t.title}</h1>
          <p className="contact-subtitle">{t.subtitle}</p>
        </Col>
      </Row>

      {/* Contact Section */}
      <Row className="mb-5">
        {/* Contact Methods */}

        <Col lg={6}>
          <Card className="contact-card border-dark">
            <Card.Header className="contact-card-header bg-white border-dark">
              <Card.Title className="mb-0">{t.howItWorks}</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="how-it-works">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h2 className="h5">{t.browseCafes}</h2>
                    <p>{t.browseCafesDesc}</p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h2 className="h5">{t.chooseYourCoffee}</h2>
                    <p>{t.chooseYourCoffeeDesc}</p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h2 className="h5">{t.placeYourOrder}</h2>
                    <p>{t.placeYourOrderDesc}</p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h2 className="h5">{t.enjoyYourCoffee}</h2>
                    <p>{t.enjoyYourCoffeeDesc}</p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card className="contact-card border-dark">
            <Card.Header className="contact-card-header bg-white border-dark">
              <Card.Title className="mb-0">{t.getInTouch}</Card.Title>
            </Card.Header>
            <Card.Body>
              <p className="mb-3">{t.questions}</p>
              <div className="contact-item mb-4">
                <h2 className="contact-label h5">{t.emailLabel}</h2>
                <a href={`mailto:${contactEmail}`} className="contact-link">
                  {contactEmail}
                </a>
              </div>
              <div className="contact-item">
                <h2 className="contact-label h5">{t.supportHours}</h2>
                <p className="mb-0">{t.mondayFriday}</p>
                <p>{t.saturdaySunday}</p>
              </div>
              <Button
                variant="dark"
                href={`mailto:${contactEmail}`}
                className="w-100 mt-3"
              >
                {t.sendEmail}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Contact Form Section */}
      <Row className="mb-5">
        <Col>
          <Card className="contact-card border-dark">
            <Card.Header className="contact-card-header bg-white border-dark">
              <Card.Title className="mb-0">{t.contactForm}</Card.Title>
              <p className="text-muted small mb-0">{t.contactFormDesc}</p>
            </Card.Header>
            <Card.Body>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formFullName">
                  <Form.Label>{t.fullName}</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullName"
                    placeholder={t.fullNamePlaceholder}
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    isInvalid={validated && !formData.fullName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {t.fieldRequired}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>{t.email}</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder={t.emailPlaceholder}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    isInvalid={validated && !formData.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {t.invalidEmailFormat}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formSubject">
                  <Form.Label>{t.subject}</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder={t.subjectPlaceholder}
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    isInvalid={validated && !formData.subject}
                  />
                  <Form.Control.Feedback type="invalid">
                    {t.fieldRequired}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>{t.message}</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder={t.messagePlaceholder}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    isInvalid={validated && !formData.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {t.fieldRequired}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button
                  variant="dark"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-100"
                >
                  {isSubmitting ? common.loading : t.submitForm}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
