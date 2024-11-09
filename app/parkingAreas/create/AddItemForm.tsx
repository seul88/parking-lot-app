'use client';

import { FC } from "react";
import { createItemAction } from "./createItemAction";
import styles from "@/app/parkingAreas/create/create.module.css";

export const AddItemForm:FC = () => {
    
    /* TODO: get edit param */
    const mockQueryParams = 'edit=true';
    const openForm = true;

    return (
        <>
            {openForm &&
                <form action={createItemAction} className={styles.addItemForm}>
                    <div className={styles.addItemFormRow}>
                        <label htmlFor="name-input">
                            Name
                        </label>
                        <input
                            id='name-input'
                            name="name"
                            title='Name'
                            type='text'
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
                            defaultValue={0}
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
                            defaultValue={0}
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
                            defaultValue={0}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        Submit
                    </button>
                </form>
            }
        </>
    );
};
