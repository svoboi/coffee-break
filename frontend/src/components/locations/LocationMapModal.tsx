import { Modal } from "react-bootstrap";
import { useGetCafeById } from "../../hooks/CafeHooks";
import type { Cafe } from "../../types/types";

function LocationMapModal({
  cafeId,
  onSetSelectedCafeId,
}: {
  cafeId: number | null;
  onSetSelectedCafeId: (id: number | null) => void;
}) {
  const { data: cafe } = useGetCafeById(
    !!cafeId,
    cafeId ? cafeId.toString() : ""
  );

  if (!cafe || !("name" in cafe)) {
    return null;
  }

  const cafeData = cafe as Cafe;

  return (
    <Modal
      show={true}
      size="lg"
      centered
      onHide={() => onSetSelectedCafeId(null)}
    >
      <Modal.Header closeButton>
        <Modal.Title>{cafeData.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Map component or iframe goes here */}
        <div style={{ height: "400px", backgroundColor: "#e9ecef" }}>
          Map Placeholder
        </div>
        <p className="mt-3">{cafeData.address}</p>
      </Modal.Body>
    </Modal>
  );
}

export default LocationMapModal;
