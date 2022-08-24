import { CreateOfficeInput } from './create-office.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOfficeInput extends PartialType(CreateOfficeInput) {
  @Field(() => String)
  _id: string;
}
