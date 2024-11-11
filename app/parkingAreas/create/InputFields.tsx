import styles from "@/app/parkingAreas/create/create.module.css";
import { FC } from "react";
import { EditParkingAreaInputType } from "../(parkingArea)/parkingArea.types";

export const InputFields:FC<EditParkingAreaInputType> = (props) => {
    return (
        <>
            <div className={styles.addItemFormRow}>
                <label htmlFor="name-input">
                    Name
                </label>
                <input
                    id='name-input'
                    name="name"
                    title='Name'
                    type='text'
                    defaultValue={props.name}
                    required
                />
            </div>
            <div className={styles.addItemFormRow}>
                <label htmlFor="weekday-price-input">
                    Weekdays price (USD/h)
                </label>
                <input 
                    id='weekday-price-input'
                    name='weekdayPrice'
                    title='Weekdays price'
                    type='number'
                    step="0.01"
                    min={0.01}
                    defaultValue={props.weekdaysHourlyRate ?? 0}
                    required
                />
            </div>
            <div className={styles.addItemFormRow}>
                <label htmlFor="weekend-price-input">
                    Weekend price (USD/h)
                </label>
                <input 
                    id='weekend-price-input'
                    name='weekendPrice'
                    title='Weekend price'
                    type='number'
                    step="0.01"
                    min={0.01}
                    defaultValue={props.weekendHourlyRate ?? 0}
                    required
                />
            </div>
            <div className={styles.addItemFormRow}>
                <label htmlFor="discount-input">
                    Discount (%)
                </label>
                <input 
                    id='discount-input'
                    name='discount'
                    title='Discount'
                    type='number'
                    defaultValue={props.discountPercentage ?? 0}
                    required
                />
            </div>
        </>
    );
};