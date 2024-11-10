'use server';

import { FC } from "react";
import { mockParkingAreasQuery } from "../../parkingAreas/mockData";
import { Parking } from "@/app/db/models";
import { store } from "@/app/db/store";

export const ParkingAreaSelect: FC = async () => {
    /* mocked db fetch */
    // const areas = await mockParkingAreasQuery();

    const data: Parking[] = await store
        .openSession()
        .query<Parking>({ collection: "Parkings" })
        .orderBy("id")
        .all();

    const areas = data.map(item => ({
        id: String(item.id),
        name: item.name
    }));
    
    return (
        <select
            title="Parking area"
            name="areaId"
            id="parkingAreaSelect"
            required
        >
            {areas.map(area => (
                <option key={area.id} value={area.id}>{area.name}</option>
            ))}
        </select>
    );
};
