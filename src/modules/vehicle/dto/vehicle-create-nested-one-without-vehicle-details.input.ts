import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateWithoutVehicleDetailsInput } from './vehicle-create-without-vehicle-details.input';
import { HideField } from '@nestjs/graphql';
import { VehicleCreateOrConnectWithoutVehicleDetailsInput } from './vehicle-create-or-connect-without-vehicle-details.input';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class VehicleCreateNestedOneWithoutVehicleDetailsInput {

    @HideField()
    create?: VehicleCreateWithoutVehicleDetailsInput;

    @HideField()
    connectOrCreate?: VehicleCreateOrConnectWithoutVehicleDetailsInput;

    @Field(() => VehicleWhereUniqueInput, {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>;
}
