import { CreateCarInput } from './create-car.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCarInput extends PartialType(CreateCarInput) {
  @Field(() => String)
  _id: string;
}
