import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ServiceRequestJobUncheckedCreateNestedManyWithoutJobInput } from '../service-request-job/service-request-job-unchecked-create-nested-many-without-job.input';

@InputType()
export class JobUncheckedCreateWithoutJobWorkshopsInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    jobId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    categoryId!: bigint | number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:true})
    isPopular?: boolean;

    @Field(() => ServiceRequestJobUncheckedCreateNestedManyWithoutJobInput, {nullable:true})
    jobServiceRequests?: ServiceRequestJobUncheckedCreateNestedManyWithoutJobInput;
}
