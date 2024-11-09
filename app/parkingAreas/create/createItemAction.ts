'use server';

import { SaveParkingAreaInputType } from "../(parkingArea)/parkingArea.types";

export const createItemAction = async (formData: FormData) => {

    const item: SaveParkingAreaInputType = {
        name: formData.get('name') as string,
        weekdaysHourlyRate: Number(formData.get('weekdayPrice')),
        discountPercentage: Number(formData.get('discount')),
        weekendHourlyRate: Number(formData.get('weekendPrice'))
    };

    console.log(item);
    // TODO: save to DB
};