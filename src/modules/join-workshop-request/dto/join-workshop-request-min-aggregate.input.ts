import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from 'nestjs-graphql';

@InputType()
export class JoinWorkshopRequestMinAggregateInput {

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

    @Field(() => Boolean, {nullable:true})
    @HideField()
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    @HideField()
    createdBy?: true;

    @Field(() => Boolean, {nullable:true})
    @HideField()
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    @HideField()
    updatedBy?: true;

    @Field(() => Boolean, {nullable:true})
    @HideField()
    resolvedAt?: true;
}
