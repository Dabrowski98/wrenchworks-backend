import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class EmployeeCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    employeeId?: true;

    @Field(() => Boolean, {nullable:true})
    workshopId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    nickname?: true;

    @Field(() => Boolean, {nullable:true})
    login?: true;

    @Field(() => Boolean, {nullable:true})
    password?: true;

    @Field(() => Boolean, {nullable:true})
    permissionSetId?: true;

    @Field(() => Boolean, {nullable:true})
    joinedAt?: true;

    @HideField()
    deletedAt?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    createdBy?: true;

    @HideField()
    updatedAt?: true;

    @HideField()
    updatedBy?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
