import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleBrandWhereUniqueInput } from './vehicle-brand-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleBrandCreateWithoutVehiclesInput } from './vehicle-brand-create-without-vehicles.input';

@InputType()
export class VehicleBrandCreateOrConnectWithoutVehiclesInput {

    @Field(() => VehicleBrandWhereUniqueInput, {nullable:false})
    @Type(() => VehicleBrandWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleBrandWhereUniqueInput, 'brandName'>;

    @Field(() => VehicleBrandCreateWithoutVehiclesInput, {nullable:false})
    @Type(() => VehicleBrandCreateWithoutVehiclesInput)
    create!: VehicleBrandCreateWithoutVehiclesInput;
}
