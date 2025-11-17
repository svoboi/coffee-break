import { useState } from "react";
import type { Coffee } from "../../types/types";
import EditOffer from "./EditOffer";
import ViewOffer from "./ViewOffer";

function Offer({ offer }: { offer: Coffee }) {
  const [isEditMode, setIsEditMode] = useState(false);

  return isEditMode ? (
    <EditOffer
      offer={offer}
      onChangeViewMode={() => setIsEditMode(!isEditMode)}
    />
  ) : (
    <ViewOffer
      offer={offer}
      onChangeViewMode={() => setIsEditMode(!isEditMode)}
    />
  );
}

export default Offer;
