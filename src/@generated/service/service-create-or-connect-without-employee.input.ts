import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceCreateWithoutEmployeeInput } from './service-create-without-employee.input';

@InputType()
export class ServiceCreateOrConnectWithoutEmployeeInput {

    @Field(() => ServiceWhereUniqueInput, {nullable:false})
    @Type(() => ServiceWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>;

    @Field(() => ServiceCreateWithoutEmployeeInput, {nullable:false})
    @Type(() => ServiceCreateWithoutEmployeeInput)
    create!: ServiceCreateWithoutEmployeeInput;
}
