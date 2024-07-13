import { ObjectType, Field } from '@nestjs/graphql';
import { VehicleBrand } from 'src/modules/vehicle-brand/entities/vehicle-brand.entity';

@ObjectType()
export class VehicleModel {
  @Field()
  modelName: string;

  @Field()
  brandName: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

  @Field(() => VehicleBrand)
  brand: VehicleBrand;
}
