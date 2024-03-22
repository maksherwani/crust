import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/request/create-user.dto';
import { LoginUserDTO } from './dto/request/login-user.dto';

@Controller('user') //http://localhost:3000/user
export class UserController {
    constructor(private userService: UserService){}

    @Get('welcome') //http://localhost:3000/user/welcome
    welcome()
    {
        return this.userService.welcome()
    }

    @Post('signin') //http://localhost:3000/user/signin
    signIn(@Body() loginUserDTO:LoginUserDTO) // validating params with LoginUserDTO
    {
        return this.userService.signIn(loginUserDTO)
    }

    @Post('signup') //http://localhost:3000/user/signin
    signUp(@Body() createUserDTO: CreateUserDTO) // validating params with CreateUserDTO
    {
        return this.userService.signUp(createUserDTO) 
    }
}
