import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleModelWhereUniqueInput } from './vehicle-model-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleModelCreateWithoutVehiclesBrandInput } from './vehicle-model-create-without-vehicles-brand.input';

@InputType()
export class VehicleModelCreateOrConnectWithoutVehiclesBrandInput {

    @Field(() => VehicleModelWhereUniqueInput, {nullable:false})
    @Type(() => VehicleModelWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleModelWhereUniqueInput, 'modelId' | 'modelName_brandName'>;

    @Field(() => VehicleModelCreateWithoutVehiclesBrandInput, {nullable:false})
    @Type(() => VehicleModelCreateWithoutVehiclesBrandInput)
    create!: VehicleModelCreateWithoutVehiclesBrandInput;
}
