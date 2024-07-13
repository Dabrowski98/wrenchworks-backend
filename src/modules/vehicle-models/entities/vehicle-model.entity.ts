import { ObjectType, Field } from '@nestjs/graphql';
import { VehicleBrand } from 'src/modules/vehicle-brands/entities/vehicle-brand.entity';

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
