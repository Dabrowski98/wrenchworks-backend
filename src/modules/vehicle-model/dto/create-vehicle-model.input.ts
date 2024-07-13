import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateVehicleModelInput {
  @Field()
  modelName: string;

  @Field()
  brandName: string;
}