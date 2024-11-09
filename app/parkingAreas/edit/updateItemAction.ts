'use server';

import { ParkingAreaType } from "../(parkingArea)/parkingArea.types";

export const updateItemAction = async (formData: FormData) => {

    const item: ParkingAreaType = {
        id: formData.get('id') as string,
        name: formData.get('name') as string,
        weekdaysHourlyRate: Number(formData.get('weekdayPrice')),
        discountPercentage: Number(formData.get('discount')),
        weekendHourlyRate: Number(formData.get('weekendPrice'))
    };

    console.log(item);
    // TODO: save to DB
};