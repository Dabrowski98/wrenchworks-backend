import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleUpdateWithoutVehicleModelInput } from './vehicle-update-without-vehicle-model.input';
import { ValidateNested } from 'class-validator';
import { VehicleCreateWithoutVehicleModelInput } from './vehicle-create-without-vehicle-model.input';

@InputType()
export class VehicleUpsertWithWhereUniqueWithoutVehicleModelInput {

    @Field(() => VehicleWhereUniqueInput, {nullable:false})
    @Type(() => VehicleWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>;

    @Field(() => VehicleUpdateWithoutVehicleModelInput, {nullable:false})
    @Type(() => VehicleUpdateWithoutVehicleModelInput)
    @ValidateNested()
    update!: VehicleUpdateWithoutVehicleModelInput;

    @Field(() => VehicleCreateWithoutVehicleModelInput, {nullable:false})
    @Type(() => VehicleCreateWithoutVehicleModelInput)
    @ValidateNested()
    create!: VehicleCreateWithoutVehicleModelInput;
}
