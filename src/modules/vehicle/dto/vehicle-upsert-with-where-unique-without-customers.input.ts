import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleUpdateWithoutCustomersInput } from './vehicle-update-without-customers.input';
import { ValidateNested } from 'class-validator';
import { VehicleCreateWithoutCustomersInput } from './vehicle-create-without-customers.input';

@InputType()
export class VehicleUpsertWithWhereUniqueWithoutCustomersInput {

    @Field(() => VehicleWhereUniqueInput, {nullable:false})
    @Type(() => VehicleWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>;

    @Field(() => VehicleUpdateWithoutCustomersInput, {nullable:false})
    @Type(() => VehicleUpdateWithoutCustomersInput)
    @ValidateNested()
    update!: VehicleUpdateWithoutCustomersInput;

    @Field(() => VehicleCreateWithoutCustomersInput, {nullable:false})
    @Type(() => VehicleCreateWithoutCustomersInput)
    @ValidateNested()
    create!: VehicleCreateWithoutCustomersInput;
}
