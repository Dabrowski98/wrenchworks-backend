import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleModelWhereUniqueInput } from './vehicle-model-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleModelUpdateWithoutVehicleBrandInput } from './vehicle-model-update-without-vehicle-brand.input';

@InputType()
export class VehicleModelUpdateWithWhereUniqueWithoutVehicleBrandInput {

    @Field(() => VehicleModelWhereUniqueInput, {nullable:false})
    @Type(() => VehicleModelWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleModelWhereUniqueInput, 'modelId' | 'modelName_brand'>;

    @Field(() => VehicleModelUpdateWithoutVehicleBrandInput, {nullable:false})
    @Type(() => VehicleModelUpdateWithoutVehicleBrandInput)
    data!: VehicleModelUpdateWithoutVehicleBrandInput;
}
