import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceUpdateWithoutCustomerInput } from './service-update-without-customer.input';

@InputType()
export class ServiceUpdateWithWhereUniqueWithoutCustomerInput {

    @Field(() => ServiceWhereUniqueInput, {nullable:false})
    @Type(() => ServiceWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>;

    @Field(() => ServiceUpdateWithoutCustomerInput, {nullable:false})
    @Type(() => ServiceUpdateWithoutCustomerInput)
    data!: ServiceUpdateWithoutCustomerInput;
}
