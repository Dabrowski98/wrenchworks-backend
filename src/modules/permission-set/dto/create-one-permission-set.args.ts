import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionSetCreateInput } from './permission-set-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePermissionSetArgs {

    @Field(() => PermissionSetCreateInput, {nullable:true})
    @Type(() => PermissionSetCreateInput)
    data?: PermissionSetCreateInput;
}
