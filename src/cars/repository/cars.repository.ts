import { Inject, Injectable } from '@nestjs/common';
import { KnexConfig } from 'src/knex-config/knex-config';
import { CreateOrUpdateCarsDto, CurrentCarModelsDto } from '../dto/cars.dto';


@Injectable()
export class CarsRepository {
    @Inject()
    private readonly knexConfig: KnexConfig;


    createCars(cars: CreateOrUpdateCarsDto, user: CurrentCarModelsDto) {
        const knex = this.knexConfig.instance;
        const { name, color, description, distance, gearbook, ichki_img, main_img, marka, motor, narxi, tanirovka, tashqi_img, year } = cars
    
        return knex('cars').insert({ name, color, description, distance, gearbook, ichki_img, main_img, motor, narxi, tanirovka, tashqi_img, year, marka})
    }


    getCars(user: CurrentCarModelsDto) {
        const knex = this.knexConfig.instance;
        const carsList = knex.select().from('cars').where({ marka: user?.id });
        return carsList
    }

    getCar(cars) {
        const { id } = cars;
        const knex = this.knexConfig.instance;
        const getCars = knex.select().from('cars').where({ id });
        return getCars;
    }

    deleteCars(cars) {
        const { id } = cars;
        const knex = this.knexConfig.instance;
        return knex('cars').where({ id }).del()
    }

    updateCars(cars, updatedCars, user) {

        const { id } = cars;


        const knex = this.knexConfig.instance;
        return knex('cars')
            .where({ id })
            .update(updatedCars)
    }

}