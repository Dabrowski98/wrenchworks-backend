import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionSetWhereInput } from './permission-set-where.input';

@InputType()
export class PermissionSetNullableRelationFilter {

    @Field(() => PermissionSetWhereInput, {nullable:true})
    is?: PermissionSetWhereInput;

    @Field(() => PermissionSetWhereInput, {nullable:true})
    isNot?: PermissionSetWhereInput;
}
