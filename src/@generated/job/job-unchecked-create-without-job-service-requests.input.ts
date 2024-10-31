import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { WorkshopJobUncheckedCreateNestedManyWithoutJobInput } from '../workshop-job/workshop-job-unchecked-create-nested-many-without-job.input';
import { Type } from 'class-transformer';

@InputType()
export class JobUncheckedCreateWithoutJobServiceRequestsInput {

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

    @Field(() => WorkshopJobUncheckedCreateNestedManyWithoutJobInput, {nullable:true})
    @Type(() => WorkshopJobUncheckedCreateNestedManyWithoutJobInput)
    jobWorkshops?: WorkshopJobUncheckedCreateNestedManyWithoutJobInput;
}
