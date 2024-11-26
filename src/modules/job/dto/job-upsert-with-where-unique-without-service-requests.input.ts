import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { Type } from 'class-transformer';
import { JobUpdateWithoutServiceRequestsInput } from './job-update-without-service-requests.input';
import { ValidateNested } from 'class-validator';
import { JobCreateWithoutServiceRequestsInput } from './job-create-without-service-requests.input';

@InputType()
export class JobUpsertWithWhereUniqueWithoutServiceRequestsInput {

    @Field(() => JobWhereUniqueInput, {nullable:false})
    @Type(() => JobWhereUniqueInput)
    where!: Prisma.AtLeast<JobWhereUniqueInput, 'jobId'>;

    @Field(() => JobUpdateWithoutServiceRequestsInput, {nullable:false})
    @Type(() => JobUpdateWithoutServiceRequestsInput)
    @ValidateNested()
    update!: JobUpdateWithoutServiceRequestsInput;

    @Field(() => JobCreateWithoutServiceRequestsInput, {nullable:false})
    @Type(() => JobCreateWithoutServiceRequestsInput)
    @ValidateNested()
    create!: JobCreateWithoutServiceRequestsInput;
}
