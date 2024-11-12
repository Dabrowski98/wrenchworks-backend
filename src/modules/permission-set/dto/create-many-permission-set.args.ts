import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionSetCreateManyInput } from './permission-set-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPermissionSetArgs {

    @Field(() => [PermissionSetCreateManyInput], {nullable:false})
    @Type(() => PermissionSetCreateManyInput)
    data!: Array<PermissionSetCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
