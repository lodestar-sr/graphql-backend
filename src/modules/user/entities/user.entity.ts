import { ObjectType, Field } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class User {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String)
  firstname: string;

  @Prop()
  @Field(() => String)
  lastname: string;

  @Prop()
  @Field(() => String)
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
