import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateWithoutServiceRequestsInput } from './job-create-without-service-requests.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { JobCreateOrConnectWithoutServiceRequestsInput } from './job-create-or-connect-without-service-requests.input';
import { Prisma } from '@prisma/client';
import { JobWhereUniqueInput } from './job-where-unique.input';

@InputType()
export class JobUncheckedCreateNestedManyWithoutServiceRequestsInput {

    @Field(() => [JobCreateWithoutServiceRequestsInput], {nullable:true})
    @Type(() => JobCreateWithoutServiceRequestsInput)
    @ValidateNested()
    create?: Array<JobCreateWithoutServiceRequestsInput>;

    @Field(() => [JobCreateOrConnectWithoutServiceRequestsInput], {nullable:true})
    @Type(() => JobCreateOrConnectWithoutServiceRequestsInput)
    @ValidateNested()
    connectOrCreate?: Array<JobCreateOrConnectWithoutServiceRequestsInput>;

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    @Type(() => JobWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<JobWhereUniqueInput, 'jobId' | 'name'>>;
}
