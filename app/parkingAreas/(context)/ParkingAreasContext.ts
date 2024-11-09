import { createContext, Dispatch, SetStateAction } from "react";

interface ParkingAreasContextProperties {
    isCreating: boolean;
    editedItemId: string | null;
    setIsCreating: Dispatch<SetStateAction<boolean>>;
    setEditedItemId: Dispatch<SetStateAction<string | null>>;
}

const initialValues: ParkingAreasContextProperties = {
    isCreating: false,
    editedItemId: null,
    setEditedItemId: () => {},
    setIsCreating: () => {},
}

export const ParkingAreasContext = createContext<ParkingAreasContextProperties>(initialValues);