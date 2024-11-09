'use server';

import { Currencies, ParkingFeeInputValues } from "./Payment.types";

export const calculateFeeAction = async (formData: FormData) => {
    const feeInput: ParkingFeeInputValues = {
        areaId: formData.get('areaId') as string,
        startTime: formData.get('startTime') as string,
        endTime: formData.get('endTime') as string,
        date: formData.get('date') as string,
        currency: formData.get('currency') as Currencies,
    };

    console.log(feeInput);

    /* TODO: sql: get parking area by id */

    /* TODO: calculate 
        1. define if weekday of weekend fee aplies
        getDay() === 0 or getDay() === 6
        2. const baseFee = (feeInput.endTime - feeInput.startTime).ceil() * perHourFee
        3. (apply discount)
        fee = baseFee - baseFee * discount; 
    */

    /* TODO: set params with given result */
};