import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobCreateWithoutServiceRequestsInput } from './job-create-without-service-requests.input';
import { HideField } from '@nestjs/graphql';
import { JobCreateOrConnectWithoutServiceRequestsInput } from './job-create-or-connect-without-service-requests.input';
import { Prisma } from '@prisma/client';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class JobCreateNestedManyWithoutServiceRequestsInput {

    @Field(() => [JobWhereUniqueInput], {nullable:true})
    @Type(() => JobWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<JobWhereUniqueInput, 'jobId'>>;
}