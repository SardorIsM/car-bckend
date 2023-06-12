import { IsNumber, IsString } from "class-validator";
import { ApiProperty, OmitType, PickType } from "@nestjs/swagger";
import { ICars } from "../interface/cars.interface";


export class CurrentCarModelsDto{
    @ApiProperty({
        type: String
    })
    @IsString()
    id: string;
}

 export class CarsDto implements ICars {
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
        default: ''
    })
    marka: string;
    @ApiProperty({
        type: String,
        default: ''
    })
    tanirovka: boolean;
    @ApiProperty({
        type: String,
        default: ''
    })
    motor: string;
    @ApiProperty({
        type: String,
        default: ''
    })
    year: string;
    @ApiProperty({
        type: String,
        default: ''
    })
    color: string;
    @ApiProperty({
        type: String,
        default: ''
    })
    distance: string;
    @ApiProperty({
        type: String,
        default: ''
    })
    gearbook: string;
    @ApiProperty({
        type: String,
        default: ''
    })
    description: string;
    @ApiProperty({
        type: String,
        default: ''
    })
    narxi: string;
    @ApiProperty({
        type: String,
        default: ''
    })
    main_img: string;
    @ApiProperty({
        type: String,
        default: ''
    })
    tashqi_img: string;
    @ApiProperty({
        type: String,
        default: ''
    })
    ichki_img: string;
    
     
}

export class CreateOrUpdateCarsDto extends OmitType(CarsDto, ['id']){}
export class CarsIdDto extends PickType(CarsDto, ['id']){}