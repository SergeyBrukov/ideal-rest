import {IsNotEmpty, IsNumber, IsString, MinLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    age: number

    @IsString()
    @MinLength(6, {message: "Name must be more then 6 symbol"})
    @ApiProperty()
    name: string
}
