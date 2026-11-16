import { Sizes } from "../../generated/prisma/enums.js";

export class CreateDrinkDto {
    id: number;
    name: string;
    alcoholic: boolean;
    price: number;
    size: Sizes;
}
