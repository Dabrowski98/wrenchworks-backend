import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleModelWhereUniqueInput } from './vehicle-model-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleModelUpdateWithoutVehicleBrandInput } from './vehicle-model-update-without-vehicle-brand.input';
import { ValidateNested } from 'class-validator';
import { VehicleModelCreateWithoutVehicleBrandInput } from './vehicle-model-create-without-vehicle-brand.input';

@InputType()
export class VehicleModelUpsertWithWhereUniqueWithoutVehicleBrandInput {

    @Field(() => VehicleModelWhereUniqueInput, {nullable:false})
    @Type(() => VehicleModelWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleModelWhereUniqueInput, 'modelId' | 'modelName_brand'>;

    @Field(() => VehicleModelUpdateWithoutVehicleBrandInput, {nullable:false})
    @Type(() => VehicleModelUpdateWithoutVehicleBrandInput)
    @ValidateNested()
    update!: VehicleModelUpdateWithoutVehicleBrandInput;

    @Field(() => VehicleModelCreateWithoutVehicleBrandInput, {nullable:false})
    @Type(() => VehicleModelCreateWithoutVehicleBrandInput)
    @ValidateNested()
    create!: VehicleModelCreateWithoutVehicleBrandInput;
}
