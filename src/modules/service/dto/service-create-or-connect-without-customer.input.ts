import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceCreateWithoutCustomerInput } from './service-create-without-customer.input';

@InputType()
export class ServiceCreateOrConnectWithoutCustomerInput {

    @Field(() => ServiceWhereUniqueInput, {nullable:false})
    @Type(() => ServiceWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>;

    @Field(() => ServiceCreateWithoutCustomerInput, {nullable:false})
    @Type(() => ServiceCreateWithoutCustomerInput)
    create!: ServiceCreateWithoutCustomerInput;
}
