import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionSetWhereInput } from './permission-set-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPermissionSetArgs {

    @Field(() => PermissionSetWhereInput, {nullable:true})
    @Type(() => PermissionSetWhereInput)
    where?: PermissionSetWhereInput;
}
