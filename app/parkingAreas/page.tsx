import { AddButton } from "./create/AddButton";
import { AddItemForm } from "./create/AddItemForm";
import { ParkingAreasContainer } from "./ParkingAreasContainer";
import styles from "@/app/parkingAreas/parkingAreas.module.css";

export default function ParkingAreasPage() {

    return (
        <>
            <div className={styles.areasContainerHeader}>
                Parking areas
                <AddButton />
            </div>
            <AddItemForm />
            <ParkingAreasContainer />
        </>
    );
};
