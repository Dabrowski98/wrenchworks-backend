import { CreateVehicleModelInput } from './create-vehicle-model.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateVehicleModelInput extends PartialType(CreateVehicleModelInput) {
  @Field()
  modelName: string;

  @Field()
  brandName: string;
}
