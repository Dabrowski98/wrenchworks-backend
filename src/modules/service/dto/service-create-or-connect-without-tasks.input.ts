import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceCreateWithoutTasksInput } from './service-create-without-tasks.input';

@InputType()
export class ServiceCreateOrConnectWithoutTasksInput {

    @Field(() => ServiceWhereUniqueInput, {nullable:false})
    @Type(() => ServiceWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>;

    @Field(() => ServiceCreateWithoutTasksInput, {nullable:false})
    @Type(() => ServiceCreateWithoutTasksInput)
    create!: ServiceCreateWithoutTasksInput;
}
