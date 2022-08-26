import { ObjectType, Field } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class Booking {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String)
  user: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String)
  item: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String)
  model: string;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
