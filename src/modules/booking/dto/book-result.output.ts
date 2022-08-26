import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BookResultOutput {
  @Field()
  booked: boolean;
}
