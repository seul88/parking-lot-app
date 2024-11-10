'use client';

import { FC } from "react";
import styles from "@/app/parkingAreas/parkingAreas.module.css";
import { deleteItemAction } from "./deleteItemAction";

type DeleteProps = {
    id: string;
}

export const Delete: FC<DeleteProps> = ({ id }) => {

    const onClick = (formData: FormData) => {
        formData.append('id', id);
        deleteItemAction(formData);
    };

    return (
        <form action={onClick} className={styles.actionButtonFormWrapper}>
            <button  
                className={`${styles.actionButton} ${styles.deleteButton} ${styles.fillContainer}`}
                type="submit"
                title="Delete"
            >
                <img src="/delete.svg" alt="Delete" width={16} height={16} />
            </button>
        </form>
    );
};