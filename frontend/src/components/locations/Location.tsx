import type { Cafe } from "../../types/types";
import { useState } from "react";
import EditLocation from "./EditLocation";
import ViewLocation from "./ViewLocation";

function Location({
  cafe,
  onSetSelectedCafeId,
}: {
  cafe: Cafe;
  onSetSelectedCafeId: (id: number) => void;
}) {
  const [isEditMode, setIsEditMode] = useState(false);
  return isEditMode ? (
    <EditLocation
      cafe={cafe}
      onChangeViewMode={() => setIsEditMode(!isEditMode)}
    />
  ) : (
    <ViewLocation
      cafe={cafe}
      onChangeViewMode={() => setIsEditMode(!isEditMode)}
      onSetSelectedCafeId={onSetSelectedCafeId}
    />
  );
}

export default Location;
