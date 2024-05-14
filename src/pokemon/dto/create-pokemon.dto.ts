import { IsNumber, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {
    @IsString()
    @MinLength(2)
    name: string;

    @IsNumber()
    @IsPositive()
    @Min(1)
    no: number;
}
