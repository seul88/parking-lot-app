'use client';

import { FC, useContext } from "react";
import styles from "@/app/parkingAreas/parkingAreas.module.css";
import { ParkingAreasContext } from "../(context)/ParkingAreasContext";

type EditButtonProps = {
    id: string;
}

export const EditButton: FC<EditButtonProps> = ({ id }) => {

    const { setEditedItemId } = useContext(ParkingAreasContext);

    const onClick = () => {
        setEditedItemId(id);
    };

    return (
        <button
            className={`${styles.actionButton} ${styles.editButton}`} 
            onClick={onClick}
            title="Edit"
        >
            <img src="/edit.svg" alt="Delete" width={16} height={16} />
        </button>
    );
};