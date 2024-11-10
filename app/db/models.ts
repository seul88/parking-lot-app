export class Parking {
    public id!: string | null;
    public name!: string;
    public weekdaysHourlyRate!: number;
    public weekendHourlyRate!: number;
    public discountPercentage!: number;

    constructor(
        id: string | null,
        name: string,
        weekdaysHourlyRate: number,
        weekendHourlyRate: number,
        discountPercentage: number,
    ) {
        this.id = id;
        this.name = name;
        this.discountPercentage = discountPercentage;
        this.weekdaysHourlyRate = weekdaysHourlyRate;
        this.weekendHourlyRate = weekendHourlyRate;
    }
}
