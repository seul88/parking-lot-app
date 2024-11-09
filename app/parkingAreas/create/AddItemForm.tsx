'use client';

import { FC, useContext } from "react";
import { createItemAction } from "./createItemAction";
import styles from "@/app/parkingAreas/create/create.module.css";
import { ParkingAreasContext } from "../(context)/ParkingAreasContext";
import { InputFields } from "./InputFields";

export const AddItemForm:FC = () => {
    const { isCreating, setIsCreating } = useContext(ParkingAreasContext);

    const onSubmit = (formData: FormData) => {
        createItemAction(formData);
        setIsCreating(false);
    };

    return (
        <>
            {isCreating &&
                <form action={onSubmit} className={styles.addItemForm}>
                    <InputFields />
                    <button 
                        type="submit" 
                        className={styles.submitButton}
                    >
                        Submit
                    </button>
                </form>
            }
        </>
    );
};
