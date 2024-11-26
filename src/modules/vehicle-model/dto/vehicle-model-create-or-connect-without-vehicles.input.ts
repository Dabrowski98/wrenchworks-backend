import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleModelWhereUniqueInput } from './vehicle-model-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleModelCreateWithoutVehiclesInput } from './vehicle-model-create-without-vehicles.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class VehicleModelCreateOrConnectWithoutVehiclesInput {

    @Field(() => VehicleModelWhereUniqueInput, {nullable:false})
    @Type(() => VehicleModelWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleModelWhereUniqueInput, 'modelId' | 'modelName_brand'>;

    @Field(() => VehicleModelCreateWithoutVehiclesInput, {nullable:false})
    @Type(() => VehicleModelCreateWithoutVehiclesInput)
    @ValidateNested()
    create!: VehicleModelCreateWithoutVehiclesInput;
}
