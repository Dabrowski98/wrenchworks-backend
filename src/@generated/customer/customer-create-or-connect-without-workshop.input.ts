import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { Type } from 'class-transformer';
import { CustomerCreateWithoutWorkshopInput } from './customer-create-without-workshop.input';

@InputType()
export class CustomerCreateOrConnectWithoutWorkshopInput {

    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    @Type(() => CustomerWhereUniqueInput)
    where!: Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId_workshopId'>;

    @Field(() => CustomerCreateWithoutWorkshopInput, {nullable:false})
    @Type(() => CustomerCreateWithoutWorkshopInput)
    create!: CustomerCreateWithoutWorkshopInput;
}