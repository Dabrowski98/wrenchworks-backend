import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleUpdateWithoutCustomerInput } from './vehicle-update-without-customer.input';

@InputType()
export class VehicleUpdateWithWhereUniqueWithoutCustomerInput {

    @Field(() => VehicleWhereUniqueInput, {nullable:false})
    @Type(() => VehicleWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>;

    @Field(() => VehicleUpdateWithoutCustomerInput, {nullable:false})
    @Type(() => VehicleUpdateWithoutCustomerInput)
    data!: VehicleUpdateWithoutCustomerInput;
}
