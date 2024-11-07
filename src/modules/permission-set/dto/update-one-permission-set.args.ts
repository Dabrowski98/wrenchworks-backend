import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionSetUpdateInput } from './permission-set-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PermissionSetWhereUniqueInput } from './permission-set-where-unique.input';

@ArgsType()
export class UpdateOnePermissionSetArgs {

    @Field(() => PermissionSetUpdateInput, {nullable:false})
    @Type(() => PermissionSetUpdateInput)
    data!: PermissionSetUpdateInput;

    @Field(() => PermissionSetWhereUniqueInput, {nullable:false})
    @Type(() => PermissionSetWhereUniqueInput)
    where!: Prisma.AtLeast<PermissionSetWhereUniqueInput, 'permissionSetId'>;
}
