export type ParkingAreaType = {
    id: string;
    name: string;
    weekdaysHourlyRate: number;
    weekendHourlyRate: number;
    discountPercentage: number;
}

export type ParingAreaInputType = Omit<ParkingAreaType, 'id'>;