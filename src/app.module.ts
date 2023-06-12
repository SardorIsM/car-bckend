import { Module } from '@nestjs/common';
import { KnexConfigModule } from './knex-config/knex-config.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config'
import { CarModelsModule } from './car-models/car-models.module';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    KnexConfigModule, AuthModule, CarModelsModule, CarsModule],
  controllers: [],
  providers: [], 
})
export class AppModule {}
