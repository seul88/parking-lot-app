import { Suspense } from "react";
import { ParkingAreasContextProvider } from "./(context)/ParkingAreasContextProvider";
import { AddButton } from "./create/AddButton";
import { AddItemForm } from "./create/AddItemForm";
import { ParkingAreasContainer } from "./ParkingAreasContainer";
import styles from "@/app/parkingAreas/parkingAreas.module.css";
import { Loader } from "./Loader";

export default function ParkingAreasPage() {

    return (
        <ParkingAreasContextProvider>
            <div className={styles.areasContainerHeader}>
                Parking areas
                <AddButton />
            </div>
            <AddItemForm />
            <Suspense fallback={<Loader />}>
                <ParkingAreasContainer />
            </Suspense>
        </ParkingAreasContextProvider>
    );
};
