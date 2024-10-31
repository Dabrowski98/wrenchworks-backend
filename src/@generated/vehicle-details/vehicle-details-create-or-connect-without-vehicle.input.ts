import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleDetailsWhereUniqueInput } from './vehicle-details-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleDetailsCreateWithoutVehicleInput } from './vehicle-details-create-without-vehicle.input';

@InputType()
export class VehicleDetailsCreateOrConnectWithoutVehicleInput {

    @Field(() => VehicleDetailsWhereUniqueInput, {nullable:false})
    @Type(() => VehicleDetailsWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleDetailsWhereUniqueInput, 'vehicleId'>;

    @Field(() => VehicleDetailsCreateWithoutVehicleInput, {nullable:false})
    @Type(() => VehicleDetailsCreateWithoutVehicleInput)
    create!: VehicleDetailsCreateWithoutVehicleInput;
}
