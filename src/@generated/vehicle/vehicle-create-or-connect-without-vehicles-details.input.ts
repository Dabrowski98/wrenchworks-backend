import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleCreateWithoutVehiclesDetailsInput } from './vehicle-create-without-vehicles-details.input';

@InputType()
export class VehicleCreateOrConnectWithoutVehiclesDetailsInput {

    @Field(() => VehicleWhereUniqueInput, {nullable:false})
    @Type(() => VehicleWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId'>;

    @Field(() => VehicleCreateWithoutVehiclesDetailsInput, {nullable:false})
    @Type(() => VehicleCreateWithoutVehiclesDetailsInput)
    create!: VehicleCreateWithoutVehiclesDetailsInput;
}
