import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionSetUpdateManyMutationInput } from './permission-set-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { PermissionSetWhereInput } from './permission-set-where.input';

@ArgsType()
export class UpdateManyPermissionSetArgs {

    @Field(() => PermissionSetUpdateManyMutationInput, {nullable:false})
    @Type(() => PermissionSetUpdateManyMutationInput)
    @ValidateNested()
    data!: PermissionSetUpdateManyMutationInput;

    @Field(() => PermissionSetWhereInput, {nullable:true})
    @Type(() => PermissionSetWhereInput)
    where?: PermissionSetWhereInput;
}
