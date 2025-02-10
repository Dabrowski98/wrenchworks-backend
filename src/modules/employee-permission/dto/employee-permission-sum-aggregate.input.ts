import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EmployeePermissionSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    permissionId?: true;
}
