import { CreateUserDTO } from './dto/request/create-user.dto';
import { LoginUserDTO } from './dto/request/login-user.dto';
export declare class UserService {
    welcome(): string;
    signIn(loginUserDTO: LoginUserDTO): LoginUserDTO;
    signUp(createUserDTO: CreateUserDTO): CreateUserDTO;
}
