import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { LoginDto, RegisterDto } from '../dto/auth.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ){} 


    @ApiResponse({ status: 201, description: 'Created user!'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @Post("/register")
    async register(@Body() user:RegisterDto){    
       return await this.authService.register(user)
    }

    @Post("/login")
    async login(@Body() user:LoginDto){
        return await this.authService.login(user)  
    }
}
