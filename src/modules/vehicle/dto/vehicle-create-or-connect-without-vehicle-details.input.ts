import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleCreateWithoutVehicleDetailsInput } from './vehicle-create-without-vehicle-details.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class VehicleCreateOrConnectWithoutVehicleDetailsInput {

    @Field(() => VehicleWhereUniqueInput, {nullable:false})
    @Type(() => VehicleWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>;

    @Field(() => VehicleCreateWithoutVehicleDetailsInput, {nullable:false})
    @Type(() => VehicleCreateWithoutVehicleDetailsInput)
    @ValidateNested()
    create!: VehicleCreateWithoutVehicleDetailsInput;
}
