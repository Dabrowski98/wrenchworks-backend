import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class JobSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    jobId?: true;

    @Field(() => Boolean, {nullable:true})
    categoryId?: true;
}