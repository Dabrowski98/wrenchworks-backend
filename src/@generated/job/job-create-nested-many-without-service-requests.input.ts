import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateWithoutServiceRequestsInput } from './job-create-without-service-requests.input';
import { Type } from 'class-transformer';
import { JobCreateOrConnectWithoutServiceRequestsInput } from './job-create-or-connect-without-service-requests.input';
import { Prisma } from '@prisma/client';
import { JobWhereUniqueInput } from './job-where-unique.input';

@InputType()
export class JobCreateNestedManyWithoutServiceRequestsInput {

    @Field(() => [JobCreateWithoutServiceRequestsInput], {nullable:true})
    @Type(() => JobCreateWithoutServiceRequestsInput)
    create?: Array<JobCreateWithoutServiceRequestsInput>;

    @Field(() => [JobCreateOrConnectWithoutServiceRequestsInput], {nullable:true})
    @Type(() => JobCreateOrConnectWithoutServiceRequestsInput)
    connectOrCreate?: Array<JobCreateOrConnectWithoutServiceRequestsInput>;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    @Type(() => JobWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<JobWhereUniqueInput, 'jobId'>>;
}
