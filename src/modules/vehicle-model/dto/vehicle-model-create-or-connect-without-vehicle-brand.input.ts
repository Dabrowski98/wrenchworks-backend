import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleModelWhereUniqueInput } from './vehicle-model-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleModelCreateWithoutVehicleBrandInput } from './vehicle-model-create-without-vehicle-brand.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class VehicleModelCreateOrConnectWithoutVehicleBrandInput {

    @Field(() => VehicleModelWhereUniqueInput, {nullable:false})
    @Type(() => VehicleModelWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleModelWhereUniqueInput, 'modelId' | 'modelName_brand'>;

    @Field(() => VehicleModelCreateWithoutVehicleBrandInput, {nullable:false})
    @Type(() => VehicleModelCreateWithoutVehicleBrandInput)
    @ValidateNested()
    create!: VehicleModelCreateWithoutVehicleBrandInput;
}
