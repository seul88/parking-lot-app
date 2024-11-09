import { FC } from "react";
import { ParkingAreaType } from "./parkingArea.types";
import styles from "@/app/parkingAreas/parkingAreas.module.css";
import { EditButton } from "../edit/EditButton";
import { Delete } from "../delete/Delete";

export const ParkingAreaView: FC<ParkingAreaType> = ({
    id,
    name,
    weekdaysHourlyRate,
    weekendHourlyRate,
    discountPercentage
}) => {
    return (
        <>
            <div className={styles.parkingAreaHeader}>
                <div className={styles.areaName}>
                    {name}
                </div>
                <EditButton id={id} />
                <Delete id={id} />
            </div>
            <div className={styles.pricingWrapper}>
                <div className={styles.pricingItem}>
                    <div className={styles.pricingValue}>
                        {weekdaysHourlyRate.toFixed(2)}$
                    </div>
                    <div className={styles.pricingLabel}>1h (Mon. to Fri.)</div>
                </div>
                <div className={styles.pricingItem}>
                    <div className={styles.pricingValue}>
                        {weekendHourlyRate.toFixed(2)}$
                    </div>
                    <div className={styles.pricingLabel}>1h (Sat. & Sun.)</div>
                </div>
                <div className={styles.pricingItem}>
                    <div className={styles.pricingValue}>
                        {discountPercentage}%
                    </div>
                    <div className={styles.pricingLabel}>Discount</div>
                </div>
            </div>
        </>
    );
};
