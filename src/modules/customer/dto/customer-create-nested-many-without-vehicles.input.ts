import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutVehiclesInput } from './customer-create-without-vehicles.input';
import { HideField } from '@nestjs/graphql';
import { CustomerCreateOrConnectWithoutVehiclesInput } from './customer-create-or-connect-without-vehicles.input';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class CustomerCreateNestedManyWithoutVehiclesInput {

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    @Type(() => CustomerWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId' | 'guestId' | 'userId_workshopId'>>;
}