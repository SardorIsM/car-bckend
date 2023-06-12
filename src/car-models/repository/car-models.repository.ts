import { Inject, Injectable } from '@nestjs/common';
import { KnexConfig } from 'src/knex-config/knex-config';
import { CreateOrUpdateCarModelsDto, CurrentUserDto } from '../dto/car-models.dto';


@Injectable()
export class CarModelsRepository {
    @Inject()
    private readonly knexConfig: KnexConfig;


    createCarModels(carModels: CreateOrUpdateCarModelsDto, user: CurrentUserDto) {
        const knex = this.knexConfig.instance;
        const { name, img } = carModels
        return knex('carmodels').insert({ name, img, created_by: user?.id })
    }


    getCarModels() {
        const knex = this.knexConfig.instance;
        const carModelsList = knex.select().from('carmodels');
        return carModelsList
    }

    getCarModel(carModels) {
        const { id } = carModels;
        const knex = this.knexConfig.instance;
        const getCarModel = knex.select().from('carmodels').where({ id });
        return getCarModel;
    }

    deleteCarModels(carModels) {
        const { id } = carModels;
        const knex = this.knexConfig.instance;
       return knex('carmodels').where({ id }).del()
    }

    updateCarModels(carModels, updatedCarModels, user) {

        const { id } = carModels;


        const knex = this.knexConfig.instance;
        return knex('carmodels')
            .where({ id })
            .update(updatedCarModels)
    }

}