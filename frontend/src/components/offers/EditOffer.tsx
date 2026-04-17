import { Button, Card, Col, FormGroup, Form } from "react-bootstrap";
import { useState } from "react";
import type { Coffee } from "../../types/types";
import { toast } from "react-toastify";
import { useNavigate } from "@tanstack/react-router";
import { translations } from "../../i18n/czech";

const DEFAULT_CURRENCY = "CZK";

function EditOffer({
  offer,
  onChangeViewMode,
}: {
  offer: Coffee | null;
  onChangeViewMode?: () => void;
}) {
  const navigate = useNavigate();
  const t = translations;
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: offer ? offer.name : "",
    price: offer ? offer.price : 0,
    currency: DEFAULT_CURRENCY,
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { id, value } = e.target as HTMLInputElement | HTMLSelectElement;
    const fieldName = id.replace("offer", "").toLowerCase();

    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldName === "price" ? parseFloat(value) || 0 : value,
    }));
  };

  const onSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const form = (e.target as HTMLButtonElement).closest(
      "form",
    ) as HTMLFormElement;

    if (!form.checkValidity()) {
      setValidated(true);
      return;
    }

    // Saving logic to be implemented
    console.log("Saving offer:", formData);
    toast.success(
      `${t.editOffer.saveSuccessPrefix} ${formData.name} ${t.editOffer.saveSuccessSuffix}`,
    );
    setValidated(false);
    if (onChangeViewMode) onChangeViewMode();
    else
      navigate({
        to: "/employee/offers/all",
        mask: { to: "/offers" },
      });
  };

  return (
    <Col md={6}>
      <Card className="offer-card h-100 border-dark">
        <Card.Body className="px-4">
          {offer ? (
            <Card.Title>{t.editOffer.editTitle}</Card.Title>
          ) : (
            <Card.Title>{t.editOffer.createTitle}</Card.Title>
          )}
          <Form noValidate validated={validated}>
            <FormGroup className="mb-3">
              <Form.Label htmlFor="offerName">
                {t.editOffer.offerNameLabel}
              </Form.Label>
              <Form.Control
                type="text"
                id="offerName"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={t.editOffer.offerNamePlaceholder}
                required
                isInvalid={validated && !formData.name}
              />
              <Form.Control.Feedback type="invalid">
                {t.editOffer.offerNameRequired}
              </Form.Control.Feedback>
            </FormGroup>

            <FormGroup className="mb-3">
              <Form.Label htmlFor="offerPrice">
                {t.editOffer.priceLabel}
              </Form.Label>
              <Form.Control
                type="number"
                id="offerPrice"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="0.00"
                step="0.01"
                min="0"
                required
                isInvalid={validated && !formData.price}
              />
              <Form.Control.Feedback type="invalid">
                {t.editOffer.priceRequired}
              </Form.Control.Feedback>
            </FormGroup>

            <FormGroup className="mb-3">
              <Form.Label htmlFor="offerCurrency">
                {t.editOffer.currencyLabel}
              </Form.Label>
              <Form.Select
                id="offerCurrency"
                value={formData.currency}
                onChange={handleInputChange}
                required
                disabled
              >
                <option value="CZK">{t.editOffer.currencyCzkLabel}</option>
              </Form.Select>
            </FormGroup>

            <div className="d-flex gap-2">
              <Button variant="dark" className="flex-grow-1" onClick={onSave}>
                {t.offers.save}
              </Button>
              {onChangeViewMode && (
                <Button
                  variant="outline-secondary"
                  className="flex-grow-1"
                  onClick={onChangeViewMode}
                >
                  {t.offers.cancel}
                </Button>
              )}
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default EditOffer;
