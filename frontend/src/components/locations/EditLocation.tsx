import { Button, Card, Col, FormGroup, Form } from "react-bootstrap";
import { useState } from "react";
import type { Cafe } from "../../types/types";
import { toast } from "react-toastify";
import { useNavigate } from "@tanstack/react-router";
import { translations } from "../../i18n/czech";

function EditLocation({
  cafe,
  onChangeViewMode,
}: {
  cafe: Cafe | null;
  onChangeViewMode?: () => void;
}) {
  const navigate = useNavigate();
  const t = translations;
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: cafe ? cafe.name : "",
    description: cafe ? cafe.description : "",
    address: cafe ? cafe.address : "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id.replace("cafe", "").toLowerCase()]: value,
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
    console.log("Saving cafe:", formData);
    toast.success(
      `${t.editLocation.saveSuccessPrefix} ${formData.name} ${t.editLocation.saveSuccessSuffix}`,
    );
    setValidated(false);
    if (onChangeViewMode) onChangeViewMode();
    else
      navigate({
        to: "/employee/locations/all",
        mask: { to: "/employee/locations" },
      });
  };

  return (
    <Col md={6}>
      <Card className="cafe-card h-100 border-dark">
        <Card.Body className="px-4">
          {cafe ? (
            <Card.Title>{t.editLocation.editTitle}</Card.Title>
          ) : (
            <Card.Title>{t.editLocation.createTitle}</Card.Title>
          )}
          <Form noValidate validated={validated}>
            <FormGroup className="mb-3">
              <Form.Label htmlFor="cafeName">
                {t.editLocation.nameLabel}
              </Form.Label>
              <Form.Control
                type="text"
                id="cafeName"
                value={formData.name}
                onChange={handleInputChange}
                required
                isInvalid={validated && !formData.name}
              />
              <Form.Control.Feedback type="invalid">
                {t.editLocation.nameRequired}
              </Form.Control.Feedback>
            </FormGroup>

            <FormGroup className="mb-3">
              <Form.Label htmlFor="cafeDescription">
                {t.editLocation.descriptionLabel}
              </Form.Label>
              <Form.Control
                as="textarea"
                id="cafeDescription"
                rows={3}
                value={formData.description}
                onChange={handleInputChange}
                required
                isInvalid={validated && !formData.description}
              />
              <Form.Control.Feedback type="invalid">
                {t.editLocation.descriptionRequired}
              </Form.Control.Feedback>
            </FormGroup>

            <FormGroup className="mb-3">
              <Form.Label htmlFor="cafeAddress">
                {t.editLocation.addressLabel}
              </Form.Label>
              <Form.Control
                type="text"
                id="cafeAddress"
                value={formData.address}
                onChange={handleInputChange}
                required
                isInvalid={validated && !formData.address}
              />
              <Form.Control.Feedback type="invalid">
                {t.editLocation.addressRequired}
              </Form.Control.Feedback>
            </FormGroup>

            <Button variant="dark" className="w-100" onClick={onSave}>
              {t.locations.save}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default EditLocation;
