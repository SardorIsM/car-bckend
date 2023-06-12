import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CarsService } from '../service/cars.service';
import { AuthorizationGuard } from 'src/auth/guard/auth.guard';
import { CurrentUser } from 'src/auth/getUserDecorator';
import { CreateOrUpdateCarsDto, CurrentCarModelsDto, CarsDto, CarsIdDto } from '../dto/cars.dto';
import { ApiBasicAuth, ApiBearerAuth, ApiSecurity, ApiTags } from '@nestjs/swagger';


@ApiTags('cars')
@Controller('cars')

export class CarsController {
    constructor(
        private carsService: CarsService
    ) { }

    @Get("/list/:id")
    async getCarModels(
        @Param() user: CurrentCarModelsDto
    ) {

        let carModels = await this.carsService.getCars(user)
        return carModels
    }

    @ApiBearerAuth()
    @UseGuards(AuthorizationGuard)
    @Post("/create")
    async createCarModels(@Body() carModels: CreateOrUpdateCarsDto, @CurrentUser() user: CurrentCarModelsDto) {
        return await this.carsService.createCars(carModels, user);
    }

    @ApiBearerAuth()
    @UseGuards(AuthorizationGuard)
    @Get("/:id")
    async getCarModel(
        @Param() carModels: CarsIdDto
    ) {
        return await this.carsService.getCar(carModels);
    }

    @ApiBearerAuth()
    @UseGuards(AuthorizationGuard)
    @Put("/update/:id")
    async updateCarModels(
        @Param() carModels: CarsIdDto,
        @Body() updatedCarModels: CreateOrUpdateCarsDto,
        @CurrentUser() user: CurrentCarModelsDto
    ) {
        return await this.carsService.updateCars(carModels, updatedCarModels, user)
    }

    @ApiBearerAuth()
    @UseGuards(AuthorizationGuard)
    @Delete("/delete/:id")
    async deleteCarModels(
        @Param() carModels: CarsIdDto,
        @CurrentUser() user: CurrentCarModelsDto
    ) {
        return await this.carsService.deleteCars(carModels, user)
    }
}
