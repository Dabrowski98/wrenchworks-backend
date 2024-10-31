import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ServiceRequestJobUncheckedCreateNestedManyWithoutJobInput } from '../service-request-job/service-request-job-unchecked-create-nested-many-without-job.input';
import { WorkshopJobUncheckedCreateNestedManyWithoutJobInput } from '../workshop-job/workshop-job-unchecked-create-nested-many-without-job.input';
import { Type } from 'class-transformer';

@InputType()
export class JobUncheckedCreateWithoutJobCategoryInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    jobId?: bigint | number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:true})
    isPopular?: boolean;

    @Field(() => ServiceRequestJobUncheckedCreateNestedManyWithoutJobInput, {nullable:true})
    jobServiceRequests?: ServiceRequestJobUncheckedCreateNestedManyWithoutJobInput;

    @Field(() => WorkshopJobUncheckedCreateNestedManyWithoutJobInput, {nullable:true})
    @Type(() => WorkshopJobUncheckedCreateNestedManyWithoutJobInput)
    jobWorkshops?: WorkshopJobUncheckedCreateNestedManyWithoutJobInput;
}
