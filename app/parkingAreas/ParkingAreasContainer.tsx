import { FC } from "react";
import { ParkingArea } from "./(parkingArea)/ParkingArea";
import styles from "@/app/parkingAreas/parkingAreas.module.css";
import { store } from "../db/store";
import { Parking } from "../db/models";

export const ParkingAreasContainer:FC = async () => {
    const data: Parking[] = await store
        .openSession()
        .query<Parking>({ collection: "Parkings" })
        .orderBy("id")
        .all();
        
    const parkingData= data.map(parking => ({
        id: String(parking.id),
        name: parking.name,
        weekdaysHourlyRate: parking.weekdaysHourlyRate,
        weekendHourlyRate: parking.weekendHourlyRate,
        discountPercentage: parking.discountPercentage
    }));

    return (
        <div className={styles.areasContainer}>
            {parkingData.length === 0 ?
                'No items found.' :
                parkingData.map(item => (<ParkingArea key={item.id} {...item} />))
            }
        </div>
    );
};
