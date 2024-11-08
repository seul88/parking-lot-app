import { FC } from "react";
import { ParkingAreaType } from "./parkingAreas.types";
import styles from "@/app/parkingAreas/parkingAreas.module.css";
import { Delete } from "./delete/Delete";
import { Edit } from "./edit/Edit";

export const ParkingArea: FC<ParkingAreaType> = ({
    id,
    name,
    weekdaysHourlyRate,
    weekendHourlyRate,
    discountPercentage
}) => {

    // todo: should rely on url params and if edit param for given value is set to true -
    // display form instead

    return (
        <div className={styles.parkingAreaWrapper}>
            <div className={styles.parkingAreaHeader}>
                <div className={styles.areaName}>
                    {name}
                </div>
                <Edit 
                    id={id}
                    discountPercentage={discountPercentage}
                    name={name}
                    weekendHourlyRate={weekendHourlyRate}
                    weekdaysHourlyRate={weekdaysHourlyRate}
                />
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
        </div>
    );
};