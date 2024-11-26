import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateWithoutVehicleDetailsInput } from './vehicle-create-without-vehicle-details.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VehicleCreateOrConnectWithoutVehicleDetailsInput } from './vehicle-create-or-connect-without-vehicle-details.input';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';

@InputType()
export class VehicleCreateNestedOneWithoutVehicleDetailsInput {

    @Field(() => VehicleCreateWithoutVehicleDetailsInput, {nullable:true})
    @Type(() => VehicleCreateWithoutVehicleDetailsInput)
    @ValidateNested()
    create?: VehicleCreateWithoutVehicleDetailsInput;

    @Field(() => VehicleCreateOrConnectWithoutVehicleDetailsInput, {nullable:true})
    @Type(() => VehicleCreateOrConnectWithoutVehicleDetailsInput)
    @ValidateNested()
    connectOrCreate?: VehicleCreateOrConnectWithoutVehicleDetailsInput;

    @Field(() => VehicleWhereUniqueInput, {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>;
}
