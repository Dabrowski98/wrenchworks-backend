import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleUpdateWithoutVehicleModelInput } from './vehicle-update-without-vehicle-model.input';

@InputType()
export class VehicleUpdateWithWhereUniqueWithoutVehicleModelInput {

    @Field(() => VehicleWhereUniqueInput, {nullable:false})
    @Type(() => VehicleWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>;

    @Field(() => VehicleUpdateWithoutVehicleModelInput, {nullable:false})
    @Type(() => VehicleUpdateWithoutVehicleModelInput)
    data!: VehicleUpdateWithoutVehicleModelInput;
}
