import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PermissionSetSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    permissionSetId?: true;

    @Field(() => Boolean, {nullable:true})
    workshopId?: true;
}
