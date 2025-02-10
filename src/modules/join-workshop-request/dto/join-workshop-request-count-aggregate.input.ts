import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class JoinWorkshopRequestCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    joinWorkshopRequestId?: true;

    @Field(() => Boolean, {nullable:true})
    receiverId?: true;

    @Field(() => Boolean, {nullable:true})
    workshopId?: true;

    @Field(() => Boolean, {nullable:true})
    employeeId?: true;

    @Field(() => Boolean, {nullable:true})
    message?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    createdBy?: true;

    @HideField()
    updatedAt?: true;

    @HideField()
    updatedBy?: true;

    @HideField()
    resolvedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
