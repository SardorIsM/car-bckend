import { IsNumber, IsString } from "class-validator";
import { ApiProperty, OmitType, PickType } from "@nestjs/swagger";
import { ICarModels } from "../interface/car-models.interface";


export class CurrentUserDto{
    @ApiProperty({
        type: String
    })
    @IsString()
    id: string;
}

 export class CarModelsDto implements ICarModels {
    @ApiProperty({
        type: String,
        default: '3edeb21b-f505-4b8e-95b9-ae6c4cdb70fb'
    })
    id: string;
    @ApiProperty({
        type: String,
        default: 'Tesla'
    })
    name: string;
    @ApiProperty({
        type: String,
        default: 'https://electrek.co/wp-content/uploads/sites/3/2021/05/Tesla-Logo-Hero.jpg?quality=82&strip=all&w=1024'
    })
    img: string;
    
     
}

export class CreateOrUpdateCarModelsDto extends OmitType(CarModelsDto, ['id']){}
export class CarModelsIdDto extends PickType(CarModelsDto, ['id']){}