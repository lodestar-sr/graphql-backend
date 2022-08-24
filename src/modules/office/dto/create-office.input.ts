import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateOfficeInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  address: string;
}
