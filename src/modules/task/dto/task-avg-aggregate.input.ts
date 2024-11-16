import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TaskAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    taskId?: true;

    @Field(() => Boolean, {nullable:true})
    serviceId?: true;

    @Field(() => Boolean, {nullable:true})
    workshopJobId?: true;

    @Field(() => Boolean, {nullable:true})
    executionTime?: true;

    @Field(() => Boolean, {nullable:true})
    partsCost?: true;
}
