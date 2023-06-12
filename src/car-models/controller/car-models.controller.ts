import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CarModelsService } from '../service/car-models.service';
import { AuthorizationGuard } from 'src/auth/guard/auth.guard';
import { CurrentUser } from 'src/auth/getUserDecorator';
import { CreateOrUpdateCarModelsDto, CurrentUserDto, CarModelsDto, CarModelsIdDto } from '../dto/car-models.dto';
import { ApiBasicAuth, ApiBearerAuth, ApiSecurity, ApiTags } from '@nestjs/swagger';

@ApiTags('carModels')
@Controller('carModels')
export class CarModelsController {

    constructor(
        private carModelsService: CarModelsService
    ) { }

    @Get("/list")
    async getCarModels(

    ) {

        let carModels = await this.carModelsService.getCarModels()
        return carModels
    }

    @ApiBearerAuth()
    @UseGuards(AuthorizationGuard)
    @Post("/create")
    async createCarModels(@Body() carModels: CreateOrUpdateCarModelsDto, @CurrentUser() user: CurrentUserDto) {
        return await this.carModelsService.createCarModels(carModels, user);
    }


    @ApiBearerAuth()
    @UseGuards(AuthorizationGuard)
    @Get("/:id")
    async getCarModel(
        @Param() carModels: CarModelsIdDto
    ) {
        return await this.carModelsService.getCarModel(carModels);
    }

    @ApiBearerAuth()
    @UseGuards(AuthorizationGuard)
    @Put("/update/:id")
    async updateCarModels(
        @Param() carModels: CarModelsIdDto,
        @Body() updatedCarModels: CreateOrUpdateCarModelsDto,
        @CurrentUser() user: CurrentUserDto
    ) {
        return await this.carModelsService.updateCarModels(carModels, updatedCarModels, user)
    }

    @ApiBearerAuth()
    @UseGuards(AuthorizationGuard)
    @Delete("/delete/:id")
    async deleteCarModels(
        @Param() carModels: CarModelsIdDto,
        @CurrentUser() user: CurrentUserDto
    ) {
        return await this.carModelsService.deleteCarModels(carModels, user)
    }
}
