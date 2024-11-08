'use client'

import { FC } from "react";
import styles from "@/app/parkingAreas/parkingAreas.module.css";

type DeleteProps = {
    id: string;
}

export const Delete: FC<DeleteProps> = (id) => {

    const onClick = () => {
        // handle delete action
        console.log('To remove: ' + id);
    };

    return (
        <>
            <button  
                className={`${styles.actionButton} ${styles.deleteButton}`}
                onClick={onClick}
                title="Delete"
            >
                <img src="/delete.svg" alt="Delete" width={16} height={16} />
            </button>
        </>
    );
};