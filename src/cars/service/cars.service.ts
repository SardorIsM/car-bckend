import { Injectable } from '@nestjs/common';
import { CarsRepository } from '../repository/cars.repository';
import { CreateOrUpdateCarsDto, CurrentCarModelsDto } from '../dto/cars.dto';

@Injectable()
export class CarsService {
    constructor(
        private carsRepository: CarsRepository
    ) {

    }


    async getCars(user: CurrentCarModelsDto) {
        return await this.carsRepository.getCars(user)
    }

    async createCars(cars: CreateOrUpdateCarsDto, user: CurrentCarModelsDto) {
        await this.carsRepository.createCars(cars, user);
        return {
            msg: 'Create cars!'
        }
    }

    async getCar(cars) {
        return await this.carsRepository.getCar(cars);
    }

    async deleteCars(cars, user) {
        let getOne = await this.carsRepository.getCar(cars);
        if (!getOne[0]) {
            return {
                msg: 'Car not found!'
            }
        }
        await this.carsRepository.deleteCars(cars);

        return {
            msg: 'Cars deleted!'
        }
    }

    async updateCars(cars, updatedCars, user) {
        let getOne = await this.carsRepository.getCar(cars);
        if (!getOne[0]) {
            return {
                msg: 'Car not found!'
            }
        }

        await this.carsRepository.updateCars(cars, updatedCars, user)
        return {
            msg: 'Cars updated!'
        }
    }
}
