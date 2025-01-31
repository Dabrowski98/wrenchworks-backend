import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleCreateWithoutVehicleModelInput } from './vehicle-create-without-vehicle-model.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class VehicleCreateOrConnectWithoutVehicleModelInput {

    @Field(() => VehicleWhereUniqueInput, {nullable:false})
    @Type(() => VehicleWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>;

    @Field(() => VehicleCreateWithoutVehicleModelInput, {nullable:false})
    @Type(() => VehicleCreateWithoutVehicleModelInput)
    @ValidateNested()
    create!: VehicleCreateWithoutVehicleModelInput;
}
