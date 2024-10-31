import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateWithoutJobServiceRequestsInput } from './job-create-without-job-service-requests.input';
import { Type } from 'class-transformer';
import { JobCreateOrConnectWithoutJobServiceRequestsInput } from './job-create-or-connect-without-job-service-requests.input';
import { Prisma } from '@prisma/client';
import { JobWhereUniqueInput } from './job-where-unique.input';

@InputType()
export class JobCreateNestedOneWithoutJobServiceRequestsInput {

    @Field(() => JobCreateWithoutJobServiceRequestsInput, {nullable:true})
    @Type(() => JobCreateWithoutJobServiceRequestsInput)
    create?: JobCreateWithoutJobServiceRequestsInput;

    @Field(() => JobCreateOrConnectWithoutJobServiceRequestsInput, {nullable:true})
    @Type(() => JobCreateOrConnectWithoutJobServiceRequestsInput)
    connectOrCreate?: JobCreateOrConnectWithoutJobServiceRequestsInput;

    @Field(() => JobWhereUniqueInput, {nullable:true})
    @Type(() => JobWhereUniqueInput)
    connect?: Prisma.AtLeast<JobWhereUniqueInput, 'jobId'>;
}
