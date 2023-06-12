import { ApiProperty, OmitType, PickType } from '@nestjs/swagger';
import { IUser } from "../interface/auth.interface";


export class UserDto implements IUser{
    @ApiProperty({
        type: String,
        default: '1'
    })
    id: string;

    @ApiProperty({
        type: String,
        description: 'Enter your username',
        default: 'sardor'
    })
    username: string;


    @ApiProperty({
        type: String,
        description: 'Enter your role',
        enum: ['admin', 'user']
    })
    role: string;

    @ApiProperty({
        type: String,
        description: 'Enter your password',
        default: '123456'
    })
    password: string;
    
}

 export class RegisterDto extends OmitType(UserDto, ['id']) {}


 export class LoginDto extends PickType(UserDto, ['username', 'password']) {}