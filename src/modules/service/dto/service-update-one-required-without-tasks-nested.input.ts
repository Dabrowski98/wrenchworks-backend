import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateWithoutTasksInput } from './service-create-without-tasks.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceCreateOrConnectWithoutTasksInput } from './service-create-or-connect-without-tasks.input';
import { ServiceUpsertWithoutTasksInput } from './service-upsert-without-tasks.input';
import { Prisma } from '@prisma/client';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { ServiceUpdateToOneWithWhereWithoutTasksInput } from './service-update-to-one-with-where-without-tasks.input';

@InputType()
export class ServiceUpdateOneRequiredWithoutTasksNestedInput {

    @Field(() => ServiceCreateWithoutTasksInput, {nullable:true})
    @Type(() => ServiceCreateWithoutTasksInput)
    @ValidateNested()
    create?: ServiceCreateWithoutTasksInput;

    @Field(() => ServiceCreateOrConnectWithoutTasksInput, {nullable:true})
    @Type(() => ServiceCreateOrConnectWithoutTasksInput)
    @ValidateNested()
    connectOrCreate?: ServiceCreateOrConnectWithoutTasksInput;

    @Field(() => ServiceUpsertWithoutTasksInput, {nullable:true})
    @Type(() => ServiceUpsertWithoutTasksInput)
    @ValidateNested()
    upsert?: ServiceUpsertWithoutTasksInput;

    @Field(() => ServiceWhereUniqueInput, {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<ServiceWhereUniqueInput, 'serviceId' | 'serviceRequestId'>;

    @Field(() => ServiceUpdateToOneWithWhereWithoutTasksInput, {nullable:true})
    @Type(() => ServiceUpdateToOneWithWhereWithoutTasksInput)
    @ValidateNested()
    update?: ServiceUpdateToOneWithWhereWithoutTasksInput;
}
