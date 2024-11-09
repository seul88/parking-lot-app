'use client';

import { FC, useContext } from "react";
import { ParkingAreaType } from "./parkingArea.types";
import { ParkingAreasContext } from "../(context)/ParkingAreasContext";
import styles from "@/app/parkingAreas/parkingAreas.module.css";
import { ParkingAreaView } from "./ParkingAreaView";
import { ParkingAreaEditForm } from "../edit/ParkingAreaEditForm";

export const ParkingArea: FC<ParkingAreaType> = ({
    id,
    name,
    weekdaysHourlyRate,
    weekendHourlyRate,
    discountPercentage
}) => {
    const { editedItemId } = useContext(ParkingAreasContext);

    return (
        <div className={styles.parkingAreaWrapper}>
            {editedItemId === id ? 
                <ParkingAreaEditForm
                    id={id} 
                    name={name}
                    weekdaysHourlyRate={weekdaysHourlyRate}
                    weekendHourlyRate={weekendHourlyRate}
                    discountPercentage={discountPercentage}
                /> :
                <ParkingAreaView
                    id={id} 
                    name={name}
                    weekdaysHourlyRate={weekdaysHourlyRate}
                    weekendHourlyRate={weekendHourlyRate}
                    discountPercentage={discountPercentage}
                />
            }
        </div>
    );
};