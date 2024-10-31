import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateWithoutJobServiceRequestsInput } from './job-create-without-job-service-requests.input';
import { Type } from 'class-transformer';
import { JobCreateOrConnectWithoutJobServiceRequestsInput } from './job-create-or-connect-without-job-service-requests.input';
import { JobUpsertWithoutJobServiceRequestsInput } from './job-upsert-without-job-service-requests.input';
import { Prisma } from '@prisma/client';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { JobUpdateToOneWithWhereWithoutJobServiceRequestsInput } from './job-update-to-one-with-where-without-job-service-requests.input';

@InputType()
export class JobUpdateOneRequiredWithoutJobServiceRequestsNestedInput {

    @Field(() => JobCreateWithoutJobServiceRequestsInput, {nullable:true})
    @Type(() => JobCreateWithoutJobServiceRequestsInput)
    create?: JobCreateWithoutJobServiceRequestsInput;

    @Field(() => JobCreateOrConnectWithoutJobServiceRequestsInput, {nullable:true})
    @Type(() => JobCreateOrConnectWithoutJobServiceRequestsInput)
    connectOrCreate?: JobCreateOrConnectWithoutJobServiceRequestsInput;

    @Field(() => JobUpsertWithoutJobServiceRequestsInput, {nullable:true})
    @Type(() => JobUpsertWithoutJobServiceRequestsInput)
    upsert?: JobUpsertWithoutJobServiceRequestsInput;

    @Field(() => JobWhereUniqueInput, {nullable:true})
    @Type(() => JobWhereUniqueInput)
    connect?: Prisma.AtLeast<JobWhereUniqueInput, 'jobId'>;

    @Field(() => JobUpdateToOneWithWhereWithoutJobServiceRequestsInput, {nullable:true})
    @Type(() => JobUpdateToOneWithWhereWithoutJobServiceRequestsInput)
    update?: JobUpdateToOneWithWhereWithoutJobServiceRequestsInput;
}
