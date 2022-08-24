import { ObjectType, Field, Float } from "@nestjs/graphql";
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class Car {

  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String)
  brand: string;

  @Prop()
  @Field(() => String)
  color: string;

  @Prop()
  @Field(() => Float)
  price: number;
}

export const CarSchema = SchemaFactory.createForClass(Car);
