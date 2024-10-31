import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionSetWhereInput } from './permission-set-where.input';

@InputType()
export class PermissionSetListRelationFilter {

    @Field(() => PermissionSetWhereInput, {nullable:true})
    every?: PermissionSetWhereInput;

    @Field(() => PermissionSetWhereInput, {nullable:true})
    some?: PermissionSetWhereInput;

    @Field(() => PermissionSetWhereInput, {nullable:true})
    none?: PermissionSetWhereInput;
}
