import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceUpdateWithoutEmployeeInput } from './service-update-without-employee.input';

@InputType()
export class ServiceUpdateWithWhereUniqueWithoutEmployeeInput {

    @Field(() => ServiceWhereUniqueInput, {nullable:false})
    @Type(() => ServiceWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>;

    @Field(() => ServiceUpdateWithoutEmployeeInput, {nullable:false})
    @Type(() => ServiceUpdateWithoutEmployeeInput)
    data!: ServiceUpdateWithoutEmployeeInput;
}
