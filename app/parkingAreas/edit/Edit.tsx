'use client'

import { FC } from "react";
import styles from "@/app/parkingAreas/parkingAreas.module.css";

type EditProps = {
    id: string;
    name: string;
    weekdaysHourlyRate: number;
    weekendHourlyRate: number;
    discountPercentage: number;
}

export const Edit: FC<EditProps> = ({
    id,
    discountPercentage,
    name,
    weekdaysHourlyRate,
    weekendHourlyRate,
}) => {

    const onClick = () => {
        // add url params: 
        // edit=true
        // id, name and so on
        console.log('To edit: ' + id);
    };

    return (
        <>
            <button
                className={`${styles.actionButton} ${styles.editButton}`} 
                onClick={onClick}
                title="Edit"
            >
                <img src="/edit.svg" alt="Delete" width={16} height={16} />
            </button>
        </>
    );
};