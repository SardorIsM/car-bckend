import { Module } from '@nestjs/common';
import { CarModelsController } from './controller/car-models.controller';
import { CarModelsService } from './service/car-models.service';
import { KnexConfigModule } from 'src/knex-config/knex-config.module';
import { CarModelsRepository } from './repository/car-models.repository';

@Module({
  imports: [KnexConfigModule],
  controllers: [CarModelsController],
  providers: [CarModelsService, CarModelsRepository]
})
export class CarModelsModule {}
