'use client';

import { FC } from "react"
import moment from "moment";
import styles from '../payment.module.css';

export const DateInputs: FC = () => {
    return (
        <>
            <div className={styles.addItemFormRow}>
                <label htmlFor='start-time-input'>
                    Start time
                </label>
                <input
                    title="Start time"
                    name='startTime'
                    id="start-time-input" 
                    type="time"
                    defaultValue={`${moment().format('HH:MM')}`}
                    required
                />
            </div>
            <div className={styles.addItemFormRow}>
                <label htmlFor='end-time-input'>
                    End time
                </label>
                <input
                    title="End time"
                    name='endTime'
                    id="end-time-input" 
                    type="time"
                    defaultValue={moment().add(1, 'hour').format('HH:MM')}
                    required
                />
            </div>
            <div className={styles.addItemFormRow}>
                <label htmlFor='date-input'>
                    Date
                </label>
                <input
                    title="Date"
                    name="date"
                    id="date-input"
                    type="date"
                    defaultValue={moment().format('YYYY-MM-DD')}
                    required
                />
            </div>
        </>
    );
};
