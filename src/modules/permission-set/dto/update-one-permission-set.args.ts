import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionSetUpdateInput } from './permission-set-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PermissionSetWhereUniqueInput } from './permission-set-where-unique.input';
import * as Validator from 'class-validator';

@ArgsType()
export class UpdateOnePermissionSetArgs {

    @Field(() => PermissionSetUpdateInput, {nullable:false})
    @Type(() => PermissionSetUpdateInput)
    @Validator.ValidateNested()
    data!: PermissionSetUpdateInput;

    @Field(() => PermissionSetWhereUniqueInput, { nullable: false })
    @Type(() => PermissionSetWhereUniqueInput)
    @Validator.Allow()
    where!: Prisma.AtLeast<PermissionSetWhereUniqueInput, 'permissionSetId'>;
}
