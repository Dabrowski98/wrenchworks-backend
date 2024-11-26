import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionSetCreateManyInput } from './permission-set-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManyPermissionSetArgs {

    @Field(() => [PermissionSetCreateManyInput], {nullable:false})
    @Type(() => PermissionSetCreateManyInput)
    @ValidateNested()
    data!: Array<PermissionSetCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
