import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SearchBookingsInput {
  @Field(() => String)
  user: string; // TODO: we will get user id from the auth token later

  @Field(() => Number, { nullable: true })
  offset: number;

  @Field(() => Number, { nullable: true })
  limit: number;
}
