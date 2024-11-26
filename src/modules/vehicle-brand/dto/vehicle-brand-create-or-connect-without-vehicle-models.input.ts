import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleBrandWhereUniqueInput } from './vehicle-brand-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleBrandCreateWithoutVehicleModelsInput } from './vehicle-brand-create-without-vehicle-models.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class VehicleBrandCreateOrConnectWithoutVehicleModelsInput {

    @Field(() => VehicleBrandWhereUniqueInput, {nullable:false})
    @Type(() => VehicleBrandWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleBrandWhereUniqueInput, 'brandName'>;

    @Field(() => VehicleBrandCreateWithoutVehicleModelsInput, {nullable:false})
    @Type(() => VehicleBrandCreateWithoutVehicleModelsInput)
    @ValidateNested()
    create!: VehicleBrandCreateWithoutVehicleModelsInput;
}
