import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TaskCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    taskId?: true;

    @Field(() => Boolean, {nullable:true})
    serviceId?: true;

    @Field(() => Boolean, {nullable:true})
    jobId?: true;

    @Field(() => Boolean, {nullable:true})
    customName?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    executionTime?: true;

    @Field(() => Boolean, {nullable:true})
    partsCost?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
