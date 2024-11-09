export type ParkingAreaType = {
    id: string;
    name: string;
    weekdaysHourlyRate: number;
    weekendHourlyRate: number;
    discountPercentage: number;
}

export type SaveParkingAreaInputType = Omit<ParkingAreaType, 'id'>;
export type EditParkingAreaInputType = Partial<SaveParkingAreaInputType>;