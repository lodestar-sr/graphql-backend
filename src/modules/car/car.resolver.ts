import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CarService } from './car.service';
import { Car } from './entities/car.entity';
import { CreateCarInput } from './dto/create-car.input';
import { UpdateCarInput } from './dto/update-car.input';

@Resolver(() => Car)
export class CarResolver {
  constructor(private readonly carService: CarService) {}

  @Query(() => [Car], { name: 'findAllCars' })
  findAll() {
    return this.carService.findAll();
  }

  @Query(() => Car, { name: 'findCar' })
  findOne(@Args('_id', { type: () => String }) id: string) {
    return this.carService.findOne(id);
  }

  @Mutation(() => Car)
  createCar(@Args('createCarInput') createCarInput: CreateCarInput) {
    return this.carService.create(createCarInput);
  }

  @Mutation(() => Car)
  updateCar(@Args('updateCarInput') updateCarInput: UpdateCarInput) {
    return this.carService.update(updateCarInput._id, updateCarInput);
  }

  @Mutation(() => Car)
  removeCar(@Args('_id', { type: () => String }) id: string) {
    return this.carService.remove(id);
  }
}
