import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionSetCreateInput } from './permission-set-create.input';
import { Type } from 'class-transformer';
import * as Validator from 'class-validator';

@ArgsType()
export class CreateOnePermissionSetArgs {
    @Field(() => PermissionSetCreateInput, { nullable: false })
    @Type(() => PermissionSetCreateInput)
    @Validator.ValidateNested()
    data!: PermissionSetCreateInput;
}
