'use server';

import { Parking } from "../db/models";
import { store } from "../db/store";
import { Currencies, ParkingFeeInputValues } from "./Payment.types";
import moment from "moment";

export const calculateFeeAction = async (formData: FormData) => {
    const feeInput: ParkingFeeInputValues = {
        areaId: formData.get('areaId') as string,
        startTime: formData.get('startTime') as string,
        endTime: formData.get('endTime') as string,
        date: formData.get('date') as string,
        currency: formData.get('currency') as Currencies,
    };

    const data: Parking | null= await store
        .openSession()
        .query<Parking>({ collection: "Parkings" })
        .whereEquals('id', feeInput.areaId)
        .firstOrNull();

    if (!data) {
        throw Error('Parking area not found!')
    }

    const { weekdaysHourlyRate, weekendHourlyRate, discountPercentage } = data;
       
    const startTime = moment(`${feeInput.date}T${feeInput.startTime}`);
    const endTime = moment(`${feeInput.date}T${feeInput.endTime}`);
    const parkingHours = Math.ceil(endTime.diff(startTime, 'hours', true));

    if (parkingHours < 0) {
        throw Error('Time travels not allowed!')
    }

    const isWeekend = new Date(feeInput.date).getDay() === 0 || 
        new Date(feeInput.date).getDay() === 6;

    const baseFee = parkingHours * (isWeekend ? weekendHourlyRate : weekdaysHourlyRate);
    const finalFee = baseFee - (baseFee * discountPercentage / 100);

    console.log(finalFee);

    if (feeInput.currency !== Currencies.USD) {
        // TODO: fetch exchange rate and convert currency
    }

    /* TODO: set params with given result */
};