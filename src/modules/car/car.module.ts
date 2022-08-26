import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarService } from './car.service';
import { CarResolver } from './car.resolver';
import { Car, CarSchema } from './entities/car.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }])],
  providers: [CarResolver, CarService],
})
export class CarModule {}
