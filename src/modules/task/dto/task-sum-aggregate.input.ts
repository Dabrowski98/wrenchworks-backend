import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class TaskSumAggregateInput {

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

    @HideField()
    createdBy?: true;

    @HideField()
    updatedBy?: true;

    @HideField()
    resolvedBy?: true;
}
