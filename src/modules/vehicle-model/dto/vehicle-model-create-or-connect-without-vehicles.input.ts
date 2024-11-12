import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleModelWhereUniqueInput } from './vehicle-model-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleModelCreateWithoutVehiclesInput } from './vehicle-model-create-without-vehicles.input';

@InputType()
export class VehicleModelCreateOrConnectWithoutVehiclesInput {

    @Field(() => VehicleModelWhereUniqueInput, {nullable:false})
    @Type(() => VehicleModelWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleModelWhereUniqueInput, 'modelId' | 'modelName_brandName'>;

    @Field(() => VehicleModelCreateWithoutVehiclesInput, {nullable:false})
    @Type(() => VehicleModelCreateWithoutVehiclesInput)
    create!: VehicleModelCreateWithoutVehiclesInput;
}
