import { Field, ObjectType } from "@nestjs/graphql";
import { Car } from "../../car/entities/car.entity";
import { Office } from "../../office/entities/office.entity";

@ObjectType()
export class SearchBookingsOutput {
  @Field(() => [Car])
  cars: Car[];

  @Field(() => [Office])
  offices: Office[];
}
