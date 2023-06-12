import { Module } from '@nestjs/common';
import { CarsService } from './service/cars.service';
import { CarsController } from './controller/cars.controller';
import { KnexConfigModule } from 'src/knex-config/knex-config.module';
import { CarsRepository } from './repository/cars.repository';

@Module({
  imports: [KnexConfigModule],
  providers: [CarsService, CarsRepository],
  controllers: [CarsController]
})
export class CarsModule { }
