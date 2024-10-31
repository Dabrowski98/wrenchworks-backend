import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleCreateWithoutVehicleBrandInput } from './vehicle-create-without-vehicle-brand.input';

@InputType()
export class VehicleCreateOrConnectWithoutVehicleBrandInput {

    @Field(() => VehicleWhereUniqueInput, {nullable:false})
    @Type(() => VehicleWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId'>;

    @Field(() => VehicleCreateWithoutVehicleBrandInput, {nullable:false})
    @Type(() => VehicleCreateWithoutVehicleBrandInput)
    create!: VehicleCreateWithoutVehicleBrandInput;
}
