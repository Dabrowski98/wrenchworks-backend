import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleDetailsCreateWithoutVehicleInput } from './vehicle-details-create-without-vehicle.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VehicleDetailsCreateOrConnectWithoutVehicleInput } from './vehicle-details-create-or-connect-without-vehicle.input';
import { Prisma } from '@prisma/client';
import { VehicleDetailsWhereUniqueInput } from './vehicle-details-where-unique.input';

@InputType()
export class VehicleDetailsCreateNestedOneWithoutVehicleInput {

    @Field(() => VehicleDetailsCreateWithoutVehicleInput, {nullable:true})
    @Type(() => VehicleDetailsCreateWithoutVehicleInput)
    @ValidateNested()
    create?: VehicleDetailsCreateWithoutVehicleInput;

    @Field(() => VehicleDetailsCreateOrConnectWithoutVehicleInput, {nullable:true})
    @Type(() => VehicleDetailsCreateOrConnectWithoutVehicleInput)
    @ValidateNested()
    connectOrCreate?: VehicleDetailsCreateOrConnectWithoutVehicleInput;

    @Field(() => VehicleDetailsWhereUniqueInput, {nullable:true})
    @Type(() => VehicleDetailsWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<VehicleDetailsWhereUniqueInput, 'vehicleDetailsId' | 'vehicleId'>;
}
