import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { Type } from 'class-transformer';
import { CustomerCreateWithoutVehiclesInput } from './customer-create-without-vehicles.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class CustomerCreateOrConnectWithoutVehiclesInput {

    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    @Type(() => CustomerWhereUniqueInput)
    where!: Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId' | 'guestId' | 'userId_workshopId'>;

    @Field(() => CustomerCreateWithoutVehiclesInput, {nullable:false})
    @Type(() => CustomerCreateWithoutVehiclesInput)
    @ValidateNested()
    create!: CustomerCreateWithoutVehiclesInput;
}
