import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleDetailsWhereUniqueInput } from './vehicle-details-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleDetailsCreateWithoutVehicleInput } from './vehicle-details-create-without-vehicle.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class VehicleDetailsCreateOrConnectWithoutVehicleInput {

    @Field(() => VehicleDetailsWhereUniqueInput, {nullable:false})
    @Type(() => VehicleDetailsWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleDetailsWhereUniqueInput, 'vehicleDetailsId' | 'vehicleId'>;

    @Field(() => VehicleDetailsCreateWithoutVehicleInput, {nullable:false})
    @Type(() => VehicleDetailsCreateWithoutVehicleInput)
    @ValidateNested()
    create!: VehicleDetailsCreateWithoutVehicleInput;
}
