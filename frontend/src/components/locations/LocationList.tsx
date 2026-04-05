import { Button, Col, Row, Spinner } from "react-bootstrap";
import { useGetCafes } from "../../hooks/CafeHooks";
import Location from "./Location";
import { useLocation } from "@tanstack/react-router";
import { useState } from "react";
import LocationMapModal from "./LocationMapModal";
import type { Cafe } from "../../types/types";

function LocationList({ title }: { title: string }) {
  const {
    data: cafes,
    error: cafesError,
    isLoading: areCafesLoading,
  } = useGetCafes(true);
  const location = useLocation();
  const isEmployeeView = location.pathname.includes("employee");
  const [selectedCafeId, setSelectedCafeId] = useState<number | null>(null);

  return areCafesLoading ? (
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
  ) : cafes ? (
    <Row className="mb-5 xs" style={{ minHeight: "300px" }}>
      <Col>
        <h2 className="section-title">{title}</h2>
        <Row className="g-3">
          {cafes.map((cafe: Cafe) => (
            <Location
              key={cafe.id}
              cafe={cafe}
              onSetSelectedCafeId={(id: number) => setSelectedCafeId(id)}
            />
          ))}
        </Row>
        {isEmployeeView && (
          <div className="mt-4 text-center">
            <Button variant="primary" href="/employee/locations/new">
              Přidat novou kavárnu
            </Button>
          </div>
        )}
        <LocationMapModal
          cafeId={selectedCafeId}
          onSetSelectedCafeId={(id: number | null) => setSelectedCafeId(id)}
        />
      </Col>
    </Row>
  ) : (
    <p> {String(cafesError)} </p>
  );
}

export default LocationList;
