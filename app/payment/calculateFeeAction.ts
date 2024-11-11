'use server';

import { redirect } from 'next/navigation';
import moment from "moment";
import { Parking } from "../db/models";
import { store } from "../db/store";
import { Currencies, ParkingFeeInputValues } from "./Payment.types";

type CurrencyAPIResponse = {
    success: boolean,
    timestamp: number,
    historical: boolean,
    base: "EUR", /* API free plan limitations */
    date: string,
    rates: Record<Currencies, number>;
}

export const calculateFeeAction = async (formData: FormData) => {
    const feeInput: ParkingFeeInputValues = {
        areaId: String(formData.get('areaId')),
        startTime: String(formData.get('startTime')),
        endTime: String(formData.get('endTime')),
        date: String(formData.get('date')),
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
        throw Error('Time travels not allowed!');
    }

    const isWeekend = new Date(feeInput.date).getDay() === 0 || 
        new Date(feeInput.date).getDay() === 6;

    const baseFee = parkingHours * (isWeekend ? weekendHourlyRate : weekdaysHourlyRate);
    const finalFeeInUSD = baseFee - (baseFee * discountPercentage / 100);

    if (feeInput.currency !== Currencies.USD) {
        const finalFeeExchanged = await exchangeCurrency(finalFeeInUSD, feeInput.currency, feeInput.date);
        redirect(`/payment/details?currency=${feeInput.currency}&fee=${finalFeeExchanged}&time=${parkingHours}`);
    }

    redirect(`/payment/details?currency=${feeInput.currency}&fee=${finalFeeInUSD}&time=${parkingHours}`);
};

const exchangeCurrency = async (feeInUSD: number, currency: Currencies, date: string) => {
        /* Selection of 'Base' param is not available in API Free plan, 
        so walkaround calculations are applied. Default base is set to euro. */

        const exchangeRatesResponse = await fetch(`http://api.exchangeratesapi.io/v1/${date}?access_key=${process.env.CURRENCY_API_KEY}&symbols=USD,PLN`);

        if (!exchangeRatesResponse.ok){
            throw Error('Currencies fetch failed (external API error).');
        }

        const exchangeRates: CurrencyAPIResponse = await exchangeRatesResponse.json();
        const feeInEuros = feeInUSD / exchangeRates.rates.USD;
        const feeInPln = feeInEuros * exchangeRates.rates.PLN;

        return currency === Currencies.EUR ? feeInEuros.toFixed(2) : feeInPln.toFixed(2);
};
