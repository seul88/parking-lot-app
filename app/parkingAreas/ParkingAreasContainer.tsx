import { FC } from "react";
import { mockParkingAreasQuery } from "./mockData";
import { ParkingArea } from "./ParkingArea";

export const ParkingAreasContainer:FC = async () => {
    
    /* mocked db fetch */
    const data = await mockParkingAreasQuery();

    return (
        <div>
            {data.map(item => (<ParkingArea key={item.id} {...item} />))}
        </div>
    );
};
