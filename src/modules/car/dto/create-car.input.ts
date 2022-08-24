import { InputType, Field, Float } from "@nestjs/graphql";

@InputType()
export class CreateCarInput {
  @Field(() => String)
  brand: string;

  @Field(() => String)
  color: string;

  @Field(() => Float)
  price: number;
}
