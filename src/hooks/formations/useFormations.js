import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function useFormations() {
  const { formations, loading, selectedFormationId } = useSelector((state) => state.formations);

  const [selectedFormation, setSelectedFormation] = useState(null);

  useEffect(() => {

    if (selectedFormationId) {
      const selected = formations.find((formation) => formation.id === selectedFormationId);
      setSelectedFormation(selected);
    }

  }, [selectedFormationId, formations]);

  return {
    formations,
    loading,
    selectedFormationId,
    selectedFormation,
  }
}
