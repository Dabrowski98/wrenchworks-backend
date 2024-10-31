import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PermissionSetWhereUniqueInput } from './permission-set-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionSetCreateInput } from './permission-set-create.input';
import { PermissionSetUpdateInput } from './permission-set-update.input';

@ArgsType()
export class UpsertOnePermissionSetArgs {

    @Field(() => PermissionSetWhereUniqueInput, {nullable:false})
    @Type(() => PermissionSetWhereUniqueInput)
    where!: Prisma.AtLeast<PermissionSetWhereUniqueInput, 'permissionSetId'>;

    @Field(() => PermissionSetCreateInput, {nullable:false})
    @Type(() => PermissionSetCreateInput)
    create!: PermissionSetCreateInput;

    @Field(() => PermissionSetUpdateInput, {nullable:false})
    @Type(() => PermissionSetUpdateInput)
    update!: PermissionSetUpdateInput;
}
