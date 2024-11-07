import { FC } from "react";
import { ParkingAreaType } from "./parkingAreas.types";
import styles from "@/app/parkingAreas/parkingAreas.module.css";

export const ParkingArea: FC<ParkingAreaType> = ({
    name,
    weekdaysHourlyRate,
    weekendHourlyRate,
    discountPercentage
}) => {
    return (
        <div className={styles.parkingAreaWrapper}>
            <div>{name}</div>
            <div>{weekdaysHourlyRate}</div>
            <div>{weekendHourlyRate}</div>
            <div>{discountPercentage}</div>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    );
};