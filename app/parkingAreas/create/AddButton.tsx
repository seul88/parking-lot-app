'use client'

import { FC, useContext } from "react"
import areaStyles from "@/app/parkingAreas/parkingAreas.module.css";
import createStyles from "@/app/parkingAreas/create/create.module.css";
import { ParkingAreasContext } from "../(context)/ParkingAreasContext";

export const AddButton:FC = () => {
    const { isCreating, setIsCreating } = useContext(ParkingAreasContext);

    const onClick = () => {
        setIsCreating(true);
    };

    const onCancelClick = () => {
        setIsCreating(false);
    };

    return (
        <>
            {!isCreating &&
                <button
                    className={`${areaStyles.actionButton} ${createStyles.createButton}`}
                    onClick={onClick}
                    title="Create"
                >
                    Add new
                </button>
            }
            {isCreating &&
                <button
                    className={`${areaStyles.actionButton} ${createStyles.cancelButton}`}
                    onClick={onCancelClick}
                    title="Cancel"
                >
                    Cancel
                </button>
            }
        </>
    );
};
