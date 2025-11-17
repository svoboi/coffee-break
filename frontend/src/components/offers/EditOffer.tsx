import { Button, Card, Col, FormGroup, Form } from "react-bootstrap";
import { useState } from "react";
import type { Coffee } from "../../types/types";
import { toast } from "react-toastify";
import { useNavigate } from "@tanstack/react-router";

function EditOffer({
  offer,
  onChangeViewMode,
}: {
  offer: Coffee | null;
  onChangeViewMode?: () => void;
}) {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: offer ? offer.name : "",
    price: offer ? offer.price : 0,
    currency: offer ? offer.currency : "CZK",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
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
      "form"
    ) as HTMLFormElement;

    if (!form.checkValidity()) {
      setValidated(true);
      return;
    }

    // Saving logic to be implemented
    console.log("Saving offer:", formData);
    toast.success(`Nabídka ${formData.name} byla uložena!`);
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
            <Card.Title>Upravit nabídku</Card.Title>
          ) : (
            <Card.Title>Přidat novou nabídku</Card.Title>
          )}
          <Form noValidate validated={validated}>
            <FormGroup className="mb-3">
              <Form.Label htmlFor="offerName">Název nabídky</Form.Label>
              <Form.Control
                type="text"
                id="offerName"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="např. Espresso, Cappuccino..."
                required
                isInvalid={validated && !formData.name}
              />
              <Form.Control.Feedback type="invalid">
                Prosím, zadejte název nabídky.
              </Form.Control.Feedback>
            </FormGroup>

            <FormGroup className="mb-3">
              <Form.Label htmlFor="offerPrice">Cena</Form.Label>
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
                Prosím, zadejte cenu.
              </Form.Control.Feedback>
            </FormGroup>

            <FormGroup className="mb-3">
              <Form.Label htmlFor="offerCurrency">Měna</Form.Label>
              <Form.Select
                id="offerCurrency"
                value={formData.currency}
                onChange={handleInputChange}
                required
              >
                <option value="CZK">CZK (Česká koruna)</option>
                <option value="EUR">EUR (Euro)</option>
                <option value="USD">USD (Americký dolar)</option>
              </Form.Select>
            </FormGroup>

            <div className="d-flex gap-2">
              <Button variant="dark" className="flex-grow-1" onClick={onSave}>
                Uložit
              </Button>
              {onChangeViewMode && (
                <Button
                  variant="outline-secondary"
                  className="flex-grow-1"
                  onClick={onChangeViewMode}
                >
                  Zrušit
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
