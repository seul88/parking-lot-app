import { FC } from "react";
import { mockParkingAreasQuery } from "../parkingAreas/mockData";

export const ParkingAreaSelect: FC = async () => {
    /* mocked db fetch */
    const areas = await mockParkingAreasQuery();

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
