'use server';

import { store } from "@/app/db/store";
import { SaveParkingAreaInputType } from "../(parkingArea)/parkingArea.types";
import { Parking } from "@/app/db/models";
import { revalidatePath } from "next/cache";

export const createItemAction = async (formData: FormData) => {

    const item: SaveParkingAreaInputType = {
        name: String(formData.get('name')),
        weekdaysHourlyRate: Number(formData.get('weekdayPrice')),
        discountPercentage: Number(formData.get('discount')),
        weekendHourlyRate: Number(formData.get('weekendPrice'))
    };

    const session = store.openSession();
    const newParkingArea = new Parking(
        null,
        item.name,
        item.weekdaysHourlyRate,
        item.weekendHourlyRate,
        item.discountPercentage
    );

    await session.store<Parking>(newParkingArea);
    await session.saveChanges();

    revalidatePath('/');
};