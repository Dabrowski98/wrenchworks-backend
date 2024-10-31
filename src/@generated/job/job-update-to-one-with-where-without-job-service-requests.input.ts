import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobWhereInput } from './job-where.input';
import { Type } from 'class-transformer';
import { JobUpdateWithoutJobServiceRequestsInput } from './job-update-without-job-service-requests.input';

@InputType()
export class JobUpdateToOneWithWhereWithoutJobServiceRequestsInput {

    @Field(() => JobWhereInput, {nullable:true})
    @Type(() => JobWhereInput)
    where?: JobWhereInput;

    @Field(() => JobUpdateWithoutJobServiceRequestsInput, {nullable:false})
    @Type(() => JobUpdateWithoutJobServiceRequestsInput)
    data!: JobUpdateWithoutJobServiceRequestsInput;
}
