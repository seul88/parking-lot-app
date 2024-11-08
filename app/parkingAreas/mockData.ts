import { ParkingAreaType } from "./parkingAreas.types";

export const mockParkings: ParkingAreaType[] = [
    {
        id: '1',
        name: 'Mickiewicza',
        weekdaysHourlyRate: 4,
        weekendHourlyRate: 5,
        discountPercentage: 0
    },
    {
        id: '2',
        name: 'Slowackiego',
        weekdaysHourlyRate: 3,
        weekendHourlyRate: 6,
        discountPercentage: 0
    },
    {
        id: '3',
        name: 'Poniatowskiego',
        weekdaysHourlyRate: 8,
        weekendHourlyRate: 10,
        discountPercentage: 20
    },
    {
        id: '4',
        name: 'Dunska',
        weekdaysHourlyRate: 6,
        weekendHourlyRate: 7,
        discountPercentage: 0
    },
    {
        id: '5',
        name: 'Szwedzka',
        weekdaysHourlyRate: 8,
        weekendHourlyRate: 9,
        discountPercentage: 8
    },
    {
        id: '6',
        name: 'Finska',
        weekdaysHourlyRate: 7,
        weekendHourlyRate: 12,
        discountPercentage: 16
    },
    {
        id: '7',
        name: 'Estonska',
        weekdaysHourlyRate: 2.5,
        weekendHourlyRate: 3.67,
        discountPercentage: 12.4
    },
    {
        id: '8',
        name: 'Islandzka',
        weekdaysHourlyRate: 14,
        weekendHourlyRate: 15,
        discountPercentage: 1
    },
];

export function mockParkingAreasQuery() {
return new Promise<ParkingAreaType[]>((resolve) => {
        setTimeout(() => {
        resolve(mockParkings);
        }, 2400);
    });
};