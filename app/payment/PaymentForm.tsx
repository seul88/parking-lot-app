import { FC, Suspense } from "react";
import styles from './payment.module.css';
import { Currencies } from "./Payment.types";
import moment from 'moment';
import { calculateFeeAction } from "./calculateFeeAction";
import { ParkingAreaSelect } from "./ParkingAreaSelect";
import { CustomBarLoader } from "./CustomBarLoader";

export const PaymentForm: FC = () => {

    return (
        <form className={styles.formWrapper} action={calculateFeeAction}>
            <div className={styles.addItemFormRow}>
                <label htmlFor='start-time-input'>
                    Parking area
                </label>
                <Suspense fallback={<CustomBarLoader />}>
                    <ParkingAreaSelect />
                </Suspense>
            </div>

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
            <div className={styles.addItemFormRow}>
                <label htmlFor='currency-input'>
                    Currency
                </label>
                <select
                    title="Currency"
                    name="currency"
                    id="currency-input"
                    defaultValue={Currencies.USD}
                    required
                >
                    {Object.values(Currencies).map(currency => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
            <button className={styles.submitButton}>
                Submit
            </button>
        </form>
    );
};
