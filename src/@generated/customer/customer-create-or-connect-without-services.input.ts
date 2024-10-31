import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { Type } from 'class-transformer';
import { CustomerCreateWithoutServicesInput } from './customer-create-without-services.input';

@InputType()
export class CustomerCreateOrConnectWithoutServicesInput {

    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    @Type(() => CustomerWhereUniqueInput)
    where!: Prisma.AtLeast<CustomerWhereUniqueInput, 'customerId_workshopId'>;

    @Field(() => CustomerCreateWithoutServicesInput, {nullable:false})
    @Type(() => CustomerCreateWithoutServicesInput)
    create!: CustomerCreateWithoutServicesInput;
}
