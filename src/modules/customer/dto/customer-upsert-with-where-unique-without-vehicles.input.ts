import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { Type } from 'class-transformer';
import { CustomerUpdateWithoutVehiclesInput } from './customer-update-without-vehicles.input';
import { ValidateNested } from 'class-validator';
import { CustomerCreateWithoutVehiclesInput } from './customer-create-without-vehicles.input';

@InputType()
export class CustomerUpsertWithWhereUniqueWithoutVehiclesInput {

    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    @Type(() => CustomerWhereUniqueInput)
    where!: Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId' | 'guestId'>;

    @Field(() => CustomerUpdateWithoutVehiclesInput, {nullable:false})
    @Type(() => CustomerUpdateWithoutVehiclesInput)
    @ValidateNested()
    update!: CustomerUpdateWithoutVehiclesInput;

    @Field(() => CustomerCreateWithoutVehiclesInput, {nullable:false})
    @Type(() => CustomerCreateWithoutVehiclesInput)
    @ValidateNested()
    create!: CustomerCreateWithoutVehiclesInput;
}
