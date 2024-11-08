import { FC } from "react";
import styles from './payment.module.css';
import { Currencies } from "./Payment.types";

export const PaymentForm: FC = () => {
    return (
        <div className={styles.formWrapper}>
            <input
                title="Start time" 
                id="start-time-input" 
                type="time"
            />
            <input
                title="End time" 
                id="end-time-input" 
                type="time"
            />
            <input
                title="Date"
                id="date-input"
                type="date"
            />
            <select
                title="Currency"
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
    );
};
