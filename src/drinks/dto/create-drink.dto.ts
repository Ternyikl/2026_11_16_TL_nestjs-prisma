import { IsDefined, IsEnum, IsInt, IsNotEmpty, IsPositive, Matches } from "class-validator";
import { Sizes } from "../../generated/prisma/enums.js";

export class CreateDrinkDto {
    id: number;

    @IsNotEmpty()
    @Matches(/^[a-z]*$/, {message: "A név csak angol kiss betűs lehet"})
    name: string;

    @IsNotEmpty()
    alcoholic: boolean;

    @IsDefined()
    @IsPositive({message: "A ár csak pozítív szám lehet"})
    @IsInt({message: "A ár csak egész szám lehet"})
    price: number;

    @IsNotEmpty()
    @IsEnum(Sizes, {message: "A méret csak S/M/L/XL lehet!"})
    size: Sizes;
}
