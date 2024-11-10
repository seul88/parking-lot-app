'use server';

import { store } from "@/app/db/store";
import { Parking } from "@/app/db/models";
import { revalidatePath } from "next/cache";

export const deleteItemAction = async (formData: FormData) => {
    const session = store.openSession();
    const id = String(formData.get('id')); 
    await session.delete<Parking>(id);
    await session.saveChanges();
    revalidatePath("/");
};