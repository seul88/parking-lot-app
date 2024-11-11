'use client';

import { useState } from "react";
import { ParkingAreasContext } from "./ParkingAreasContext";

export const ParkingAreasContextProvider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const [editedItemId, setEditedItemId] = useState<string | null>(null);
    const [isCreating, setIsCreating] = useState<boolean>(false);

    return (
        <ParkingAreasContext.Provider
            value={{
                editedItemId,
                isCreating,
                setEditedItemId, 
                setIsCreating
            }}
        >
            {children}
        </ParkingAreasContext.Provider>
    );
};
