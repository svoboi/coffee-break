import { Button, Col, Row, Spinner } from "react-bootstrap";
import { useGetCoffees } from "../../hooks/CoffeeHooks";
import Offer from "./Offer";
import { useLocation } from "@tanstack/react-router";
import { translations } from "../../i18n/czech";
import type { Coffee } from "../../types/types";

function OfferList() {
  const t = translations.offers;
  const {
    data: coffees,
    error: coffeesError,
    isLoading: areCoffeesLoading,
  } = useGetCoffees(true);
  const location = useLocation();
  const isEmployeeView = location.pathname.includes("employee");

  return areCoffeesLoading ? (
    <div
      style={{
        minHeight: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Spinner />
    </div>
  ) : coffees ? (
    <Row className="mb-5" style={{ minHeight: "300px" }}>
      <Col>
        <h2 className="section-title">{t.title}</h2>
        <Row className="g-3">
          {coffees.map((offer: Coffee, index: number) => (
            <Offer offer={offer} key={`${offer.id}-${index}`} />
          ))}
        </Row>
        {isEmployeeView && coffees.length === 0 && (
          <p className="mt-3">{t.noOffers}</p>
        )}

        {isEmployeeView && (
          <Button
            variant="primary"
            className="mt-3"
            href="/employee/offers/new"
          >
            {t.addNew}
          </Button>
        )}
      </Col>
    </Row>
  ) : (
    <p> {String(coffeesError)} </p>
  );
}

export default OfferList;
