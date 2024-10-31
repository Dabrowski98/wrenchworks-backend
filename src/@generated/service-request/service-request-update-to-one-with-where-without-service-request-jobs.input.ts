import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestWhereInput } from './service-request-where.input';
import { Type } from 'class-transformer';
import { ServiceRequestUpdateWithoutServiceRequestJobsInput } from './service-request-update-without-service-request-jobs.input';

@InputType()
export class ServiceRequestUpdateToOneWithWhereWithoutServiceRequestJobsInput {

    @Field(() => ServiceRequestWhereInput, {nullable:true})
    @Type(() => ServiceRequestWhereInput)
    where?: ServiceRequestWhereInput;

    @Field(() => ServiceRequestUpdateWithoutServiceRequestJobsInput, {nullable:false})
    @Type(() => ServiceRequestUpdateWithoutServiceRequestJobsInput)
    data!: ServiceRequestUpdateWithoutServiceRequestJobsInput;
}
