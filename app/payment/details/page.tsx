'use client';
 
import { useSearchParams } from 'next/navigation';
import styles from '@/app/payment/details/paymentDetails.module.css';

export default function PaymentDetails() {
    const searchParams = useSearchParams();
    const currency = searchParams.get('currency');
    const fee = searchParams.get('fee');
    const time = searchParams.get('time');
  
    return (
        <div className={styles.paymentDetailsContainer}>
            Fee for <b>{time}h</b> of parking in selected date at given area is equal to:
            <div className={styles.priceContainer}>
                {fee} {currency}. 
            </div>
        </div>
    );
};
