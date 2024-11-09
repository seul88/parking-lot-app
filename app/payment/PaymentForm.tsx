import { FC } from "react";
import styles from './payment.module.css';
import { Currencies } from "./Payment.types";

export const PaymentForm: FC = () => {
    return (
        <div className={styles.formWrapper}>
            <div>
                <label htmlFor='start-time-input'>
                    Start time
                </label>
                <input
                    title="Start time"
                    name='startTime'
                    id="start-time-input" 
                    type="time"
                />
            </div>
            <div>
                <label htmlFor='end-time-input'>
                    End time
                </label>
                <input
                    title="End time"
                    name='endTime'
                    id="end-time-input" 
                    type="time"
                />
            </div>
            <div>
                <label htmlFor='date-input'>
                    Date
                </label>
                <input
                    title="Date"
                    name="date"
                    id="date-input"
                    type="date"
                />
            </div>
            <div>
                <label htmlFor='currency-input'>
                    Currency
                </label>
                <select
                    title="Currency"
                    name="currency"
                    id="currency-input"
                    defaultValue={Currencies.USD}   
                >
                    {Object.values(Currencies).map(currency => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>

        </div>
    );
};
