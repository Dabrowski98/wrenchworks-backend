import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PermissionSetWhereUniqueInput } from './permission-set-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePermissionSetOrThrowArgs {

    @Field(() => PermissionSetWhereUniqueInput, {nullable:false})
    @Type(() => PermissionSetWhereUniqueInput)
    where!: Prisma.AtLeast<PermissionSetWhereUniqueInput, 'permissionSetId'>;
}
