import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceRequestUpdateWithoutServiceRequestJobsInput } from './service-request-update-without-service-request-jobs.input';
import { Type } from 'class-transformer';
import { ServiceRequestCreateWithoutServiceRequestJobsInput } from './service-request-create-without-service-request-jobs.input';
import { ServiceRequestWhereInput } from './service-request-where.input';

@InputType()
export class ServiceRequestUpsertWithoutServiceRequestJobsInput {

    @Field(() => ServiceRequestUpdateWithoutServiceRequestJobsInput, {nullable:false})
    @Type(() => ServiceRequestUpdateWithoutServiceRequestJobsInput)
    update!: ServiceRequestUpdateWithoutServiceRequestJobsInput;

    @Field(() => ServiceRequestCreateWithoutServiceRequestJobsInput, {nullable:false})
    @Type(() => ServiceRequestCreateWithoutServiceRequestJobsInput)
    create!: ServiceRequestCreateWithoutServiceRequestJobsInput;

    @Field(() => ServiceRequestWhereInput, {nullable:true})
    @Type(() => ServiceRequestWhereInput)
    where?: ServiceRequestWhereInput;
}
