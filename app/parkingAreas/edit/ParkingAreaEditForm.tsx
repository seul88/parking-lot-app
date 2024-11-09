'use client'

import { FC, useContext } from "react";
import styles from "@/app/parkingAreas/parkingAreas.module.css";
import createStyles from "@/app/parkingAreas/create/create.module.css";
import { ParkingAreasContext } from "../(context)/ParkingAreasContext";
import { InputFields } from "../create/InputFields";
import { updateItemAction } from "./updateItemAction";

type ParkingAreaEditFormProps = {
    id: string;
    name: string;
    weekdaysHourlyRate: number;
    weekendHourlyRate: number;
    discountPercentage: number;
}

export const ParkingAreaEditForm: FC<ParkingAreaEditFormProps> = ({
    id,
    discountPercentage,
    name,
    weekdaysHourlyRate,
    weekendHourlyRate,
}) => {

    const { setEditedItemId } = useContext(ParkingAreasContext);

    const onSave = (formData: FormData) => {
        formData.append('id', id);
        updateItemAction(formData);
        setEditedItemId(null);
    };

    const onCancelClick = () => {
        setEditedItemId(null);
    };

    return (
        <form action={onSave} className={createStyles.addItemForm}>
            <InputFields 
                name={name}
                weekdaysHourlyRate={weekdaysHourlyRate}
                weekendHourlyRate={weekendHourlyRate}
                discountPercentage={discountPercentage}
            />
            <div className={styles.editButtonsWrapper}>
                <button
                    className={`${styles.actionButton} ${createStyles.cancelButton}`}
                    onClick={onCancelClick}
                    title="Cancel"
                >
                    Cancel
                </button>
                <button
                    className={`${styles.actionButton} ${createStyles.submitButton}`} 
                    type="submit"
                    title="Save"
                >
                    Save
                </button>
            </div>
        </form>
    );
};