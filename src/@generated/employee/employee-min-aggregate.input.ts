import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EmployeeMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    employeeId?: true;

    @Field(() => Boolean, {nullable:true})
    workshopId?: true;

    @Field(() => Boolean, {nullable:true})
    joinedAt?: true;

    @Field(() => Boolean, {nullable:true})
    deletedAt?: true;

    @Field(() => Boolean, {nullable:true})
    permissionSetId?: true;
}
