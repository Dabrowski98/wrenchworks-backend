import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleUpdateWithoutCustomerInput } from './vehicle-update-without-customer.input';
import { ValidateNested } from 'class-validator';
import { VehicleCreateWithoutCustomerInput } from './vehicle-create-without-customer.input';

@InputType()
export class VehicleUpsertWithWhereUniqueWithoutCustomerInput {

    @Field(() => VehicleWhereUniqueInput, {nullable:false})
    @Type(() => VehicleWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>;

    @Field(() => VehicleUpdateWithoutCustomerInput, {nullable:false})
    @Type(() => VehicleUpdateWithoutCustomerInput)
    @ValidateNested()
    update!: VehicleUpdateWithoutCustomerInput;

    @Field(() => VehicleCreateWithoutCustomerInput, {nullable:false})
    @Type(() => VehicleCreateWithoutCustomerInput)
    @ValidateNested()
    create!: VehicleCreateWithoutCustomerInput;
}
