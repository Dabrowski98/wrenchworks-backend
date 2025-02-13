import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { Type } from 'class-transformer';
import { VehicleCreateWithoutCustomerInput } from './vehicle-create-without-customer.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class VehicleCreateOrConnectWithoutCustomerInput {

    @Field(() => VehicleWhereUniqueInput, {nullable:false})
    @Type(() => VehicleWhereUniqueInput)
    where!: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>;

    @Field(() => VehicleCreateWithoutCustomerInput, {nullable:false})
    @Type(() => VehicleCreateWithoutCustomerInput)
    @ValidateNested()
    create!: VehicleCreateWithoutCustomerInput;
}
