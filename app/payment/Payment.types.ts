export enum Currencies {
    USD = 'USD',
    PLN = 'PLN',
    EUR = 'EUR'
}

export type ParkingFeeInputValues = {
    areaId: string;
    startTime: string;
    endTime: string;
    currency: Currencies;
    date: string;
};