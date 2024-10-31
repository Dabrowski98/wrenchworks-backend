import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateWithoutTasksInput } from './service-create-without-tasks.input';
import { Type } from 'class-transformer';
import { ServiceCreateOrConnectWithoutTasksInput } from './service-create-or-connect-without-tasks.input';
import { ServiceUpsertWithoutTasksInput } from './service-upsert-without-tasks.input';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { ServiceUpdateToOneWithWhereWithoutTasksInput } from './service-update-to-one-with-where-without-tasks.input';

@InputType()
export class ServiceUpdateOneRequiredWithoutTasksNestedInput {

    @Field(() => ServiceCreateWithoutTasksInput, {nullable:true})
    @Type(() => ServiceCreateWithoutTasksInput)
    create?: ServiceCreateWithoutTasksInput;

    @Field(() => ServiceCreateOrConnectWithoutTasksInput, {nullable:true})
    @Type(() => ServiceCreateOrConnectWithoutTasksInput)
    connectOrCreate?: ServiceCreateOrConnectWithoutTasksInput;

    @Field(() => ServiceUpsertWithoutTasksInput, {nullable:true})
    @Type(() => ServiceUpsertWithoutTasksInput)
    upsert?: ServiceUpsertWithoutTasksInput;

    @Field(() => ServiceWhereUniqueInput, {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    connect?: Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>;

    @Field(() => ServiceUpdateToOneWithWhereWithoutTasksInput, {nullable:true})
    @Type(() => ServiceUpdateToOneWithWhereWithoutTasksInput)
    update?: ServiceUpdateToOneWithWhereWithoutTasksInput;
}
