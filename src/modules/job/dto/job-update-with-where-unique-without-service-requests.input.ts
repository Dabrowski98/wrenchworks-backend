import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { Type } from 'class-transformer';
import { JobUpdateWithoutServiceRequestsInput } from './job-update-without-service-requests.input';

@InputType()
export class JobUpdateWithWhereUniqueWithoutServiceRequestsInput {

    @Field(() => JobWhereUniqueInput, {nullable:false})
    @Type(() => JobWhereUniqueInput)
    where!: Prisma.AtLeast<JobWhereUniqueInput, 'jobId' | 'name'>;

    @Field(() => JobUpdateWithoutServiceRequestsInput, {nullable:false})
    @Type(() => JobUpdateWithoutServiceRequestsInput)
    data!: JobUpdateWithoutServiceRequestsInput;
}
