import { FC, Suspense } from "react";
import styles from '../payment.module.css';
import { Currencies } from "../Payment.types";
import { calculateFeeAction } from "../calculateFeeAction";
import { ParkingAreaSelect } from "./ParkingAreaSelect";
import { CustomBarLoader } from "../CustomBarLoader";
import { DateInputs } from "./DateInputs";

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
            <DateInputs />
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
            <button type="submit" className={styles.submitButton}>
                Submit
            </button>
        </form>
    );
};
