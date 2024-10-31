import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleBrandCreateWithoutVehiclesInput } from './vehicle-brand-create-without-vehicles.input';
import { Type } from 'class-transformer';
import { VehicleBrandCreateOrConnectWithoutVehiclesInput } from './vehicle-brand-create-or-connect-without-vehicles.input';
import { Prisma } from '@prisma/client';
import { VehicleBrandWhereUniqueInput } from './vehicle-brand-where-unique.input';

@InputType()
export class VehicleBrandCreateNestedOneWithoutVehiclesInput {

    @Field(() => VehicleBrandCreateWithoutVehiclesInput, {nullable:true})
    @Type(() => VehicleBrandCreateWithoutVehiclesInput)
    create?: VehicleBrandCreateWithoutVehiclesInput;

    @Field(() => VehicleBrandCreateOrConnectWithoutVehiclesInput, {nullable:true})
    @Type(() => VehicleBrandCreateOrConnectWithoutVehiclesInput)
    connectOrCreate?: VehicleBrandCreateOrConnectWithoutVehiclesInput;

    @Field(() => VehicleBrandWhereUniqueInput, {nullable:true})
    @Type(() => VehicleBrandWhereUniqueInput)
    connect?: Prisma.AtLeast<VehicleBrandWhereUniqueInput, 'brandName'>;
}
