import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class BookOfficeInput {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  user: string; // TODO: we will get user id from the auth token later
}
