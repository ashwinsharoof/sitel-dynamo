import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    Id: number;

    
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    dob: string;
}
