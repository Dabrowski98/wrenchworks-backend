import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionSetScalarWhereInput } from './permission-set-scalar-where.input';
import { Type } from 'class-transformer';
import { PermissionSetUpdateManyMutationInput } from './permission-set-update-many-mutation.input';

@InputType()
export class PermissionSetUpdateManyWithWhereWithoutWorkshopInput {

    @Field(() => PermissionSetScalarWhereInput, {nullable:false})
    @Type(() => PermissionSetScalarWhereInput)
    where!: PermissionSetScalarWhereInput;

    @Field(() => PermissionSetUpdateManyMutationInput, {nullable:false})
    @Type(() => PermissionSetUpdateManyMutationInput)
    data!: PermissionSetUpdateManyMutationInput;
}
