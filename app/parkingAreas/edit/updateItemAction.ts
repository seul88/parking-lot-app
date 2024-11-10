'use server';

import { store } from "@/app/db/store";
import { ParkingAreaType } from "../(parkingArea)/parkingArea.types";
import { Parking } from "@/app/db/models";
import { revalidatePath } from "next/cache";

export const updateItemAction = async (formData: FormData) => {

    const item: ParkingAreaType = {
        id: formData.get('id') as string,
        name: formData.get('name') as string,
        weekdaysHourlyRate: Number(formData.get('weekdayPrice')),
        discountPercentage: Number(formData.get('discount')),
        weekendHourlyRate: Number(formData.get('weekendPrice'))
    };

    const session = store.openSession();

    const newParkingArea = new Parking(
        item.id,
        item.name,
        item.weekdaysHourlyRate,
        item.weekendHourlyRate,
        item.discountPercentage
    );

    await session.store<Parking>(newParkingArea);
    await session.saveChanges();

    revalidatePath('/');
};