import { FC } from "react";
import { mockParkingAreasQuery } from "./mockData";
import { ParkingArea } from "./ParkingArea";
import styles from "@/app/parkingAreas/parkingAreas.module.css";

export const ParkingAreasContainer:FC = async () => {
    
    /* mocked db fetch */
    const data = await mockParkingAreasQuery();

    return (
        <div className={styles.areasContainer}>
            {data.map(item => (<ParkingArea key={item.id} {...item} />))}
        </div>
    );
};
