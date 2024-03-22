import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/request/create-user.dto';
import { LoginUserDTO } from './dto/request/login-user.dto';

@Injectable()
export class UserService {
    welcome ()
    {
        return "In Welcome Service"
    }
    signIn (loginUserDTO: LoginUserDTO)
    {
        return loginUserDTO
    }
    signUp (createUserDTO: CreateUserDTO)
    {
        return createUserDTO
    }
}
