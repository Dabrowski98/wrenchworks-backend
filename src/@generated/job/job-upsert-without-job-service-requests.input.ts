import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobUpdateWithoutJobServiceRequestsInput } from './job-update-without-job-service-requests.input';
import { Type } from 'class-transformer';
import { JobCreateWithoutJobServiceRequestsInput } from './job-create-without-job-service-requests.input';
import { JobWhereInput } from './job-where.input';

@InputType()
export class JobUpsertWithoutJobServiceRequestsInput {

    @Field(() => JobUpdateWithoutJobServiceRequestsInput, {nullable:false})
    @Type(() => JobUpdateWithoutJobServiceRequestsInput)
    update!: JobUpdateWithoutJobServiceRequestsInput;

    @Field(() => JobCreateWithoutJobServiceRequestsInput, {nullable:false})
    @Type(() => JobCreateWithoutJobServiceRequestsInput)
    create!: JobCreateWithoutJobServiceRequestsInput;

    @Field(() => JobWhereInput, {nullable:true})
    @Type(() => JobWhereInput)
    where?: JobWhereInput;
}
