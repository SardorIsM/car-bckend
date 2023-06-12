import { Injectable } from '@nestjs/common';
import { CarModelsRepository } from '../repository/car-models.repository';
import { CreateOrUpdateCarModelsDto, CurrentUserDto } from '../dto/car-models.dto';


@Injectable()
export class CarModelsService {
    constructor(
        private carModelsRepository: CarModelsRepository
    ){

    }


    async getCarModels(){
       return await this.carModelsRepository.getCarModels()
    }

    async createCarModels(carModels: CreateOrUpdateCarModelsDto, user: CurrentUserDto){
        await this.carModelsRepository.createCarModels(carModels, user);
        return {
            msg: 'Create carModels!'
        }
    }

    async getCarModel(carModels){
       return await this.carModelsRepository.getCarModel(carModels);
    }

    async deleteCarModels(carModels, user){
        let getOne = await this.carModelsRepository.getCarModel(carModels);
        if(!getOne[0]){
         return {
             msg: 'CarModels not found!'
         }
        }
         await this.carModelsRepository.deleteCarModels(carModels);

         return {
            msg: 'CarModels deleted!'
         }
    }

    async updateCarModels(carModels, updatedCarModels, user){
       let getOne = await this.carModelsRepository.getCarModel(carModels);
       if(!getOne[0]){
        return {
            msg: 'CarModels not found!'
        }
       }

        await this.carModelsRepository.updateCarModels(carModels, updatedCarModels, user)
        return {
            msg: 'CarModels updated!'
        }
    }
}

