import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car } from './entities/car.entity';
import { CreateCarInput } from './dto/create-car.input';
import { UpdateCarInput } from './dto/update-car.input';

@Injectable()
export class CarService {
  constructor(
    @InjectModel(Car.name)
    private readonly carModel: Model<Car>,
  ) {}

  async findAll() {
    return this.carModel.find();
  }

  async findOne(id: string) {
    const car = await this.carModel.findOne({ _id: id }).exec();
    if (!car) {
      throw new BadRequestException("Car nod found");
    }
    return car;
  }

  create(createCarInput: CreateCarInput) {
    const car = new this.carModel(createCarInput);
    return car.save();
  }

  async update(id: string, updateCarInput: UpdateCarInput) {
    const car = await this.findOne(id);
    car.set(updateCarInput);
    return car.save();
  }

  async remove(id: string) {
    const car = await this.findOne(id);
    await car.remove();
    return car;
  }
}
