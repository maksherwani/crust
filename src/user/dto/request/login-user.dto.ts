import { IsEmail, IsNotEmpty } from "class-validator";
import { CreateUserDTO } from "./create-user.dto";

// export class LoginUserDTO extends CreateUserDTO {} // can be used for get access same DTO as Create user DTO

export class LoginUserDTO {
    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsNotEmpty()
    password:string;
}