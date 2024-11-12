import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateWithoutVehiclesDetailsInput } from './vehicle-create-without-vehicles-details.input';
import { Type } from 'class-transformer';
import { VehicleCreateOrConnectWithoutVehiclesDetailsInput } from './vehicle-create-or-connect-without-vehicles-details.input';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';

@InputType()
export class VehicleCreateNestedOneWithoutVehiclesDetailsInput {

    @Field(() => VehicleCreateWithoutVehiclesDetailsInput, {nullable:true})
    @Type(() => VehicleCreateWithoutVehiclesDetailsInput)
    create?: VehicleCreateWithoutVehiclesDetailsInput;

    @Field(() => VehicleCreateOrConnectWithoutVehiclesDetailsInput, {nullable:true})
    @Type(() => VehicleCreateOrConnectWithoutVehiclesDetailsInput)
    connectOrCreate?: VehicleCreateOrConnectWithoutVehiclesDetailsInput;

    @Field(() => VehicleWhereUniqueInput, {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    connect?: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId'>;
}
