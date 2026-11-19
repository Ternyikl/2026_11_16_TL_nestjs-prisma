import { IsDateString, IsDefined, IsEnum, IsInt, IsNotEmpty, IsPositive, Matches, Max, Min } from "class-validator";

export class CreateCakeDto {
    @IsNotEmpty()
    @Matches(/^[a-z]*$/, {message: "A név csak angol kiss betűs lehet"})
    name : string;

    @IsPositive({message: "A ár csak pozítív szám lehet"})
    @IsInt({message: "A ár csak egész szám lehet"})
    price : number;

    @IsDefined()
    @IsInt()
    @Min(5)
    @Max(50)
    size : number;

    @IsDateString()
    endDate: string;
}
