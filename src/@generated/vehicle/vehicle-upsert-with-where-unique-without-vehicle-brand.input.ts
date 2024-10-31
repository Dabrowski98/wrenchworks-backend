import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleUpdateWithoutVehicleBrandInput } from './vehicle-update-without-vehicle-brand.input';
import { VehicleCreateWithoutVehicleBrandInput } from './vehicle-create-without-vehicle-brand.input';

@InputType()
export class VehicleUpsertWithWhereUniqueWithoutVehicleBrandInput {

    @Field(() => VehicleWhereUniqueInput, {nullable:false})
    @Type(() => VehicleWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId'>;

    @Field(() => VehicleUpdateWithoutVehicleBrandInput, {nullable:false})
    @Type(() => VehicleUpdateWithoutVehicleBrandInput)
    update!: VehicleUpdateWithoutVehicleBrandInput;

    @Field(() => VehicleCreateWithoutVehicleBrandInput, {nullable:false})
    @Type(() => VehicleCreateWithoutVehicleBrandInput)
    create!: VehicleCreateWithoutVehicleBrandInput;
}
