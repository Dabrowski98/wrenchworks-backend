import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleUpdateWithoutVehicleBrandInput } from './vehicle-update-without-vehicle-brand.input';

@InputType()
export class VehicleUpdateWithWhereUniqueWithoutVehicleBrandInput {

    @Field(() => VehicleWhereUniqueInput, {nullable:false})
    @Type(() => VehicleWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId'>;

    @Field(() => VehicleUpdateWithoutVehicleBrandInput, {nullable:false})
    @Type(() => VehicleUpdateWithoutVehicleBrandInput)
    data!: VehicleUpdateWithoutVehicleBrandInput;
}
