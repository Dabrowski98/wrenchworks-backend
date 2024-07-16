import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class VehicleBrand {
  @Field()
  brandName: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

  // @Field(() => [Vehicle], { nullable: true })
  // vehicles?: Vehicle[];

  // @Field(() => [VehicleModel], { nullable: true })
  // vehicleModels?: VehicleModel[];
}
