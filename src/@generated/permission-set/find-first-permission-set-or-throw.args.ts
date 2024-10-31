import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionSetWhereInput } from './permission-set-where.input';
import { Type } from 'class-transformer';
import { PermissionSetOrderByWithRelationInput } from './permission-set-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PermissionSetWhereUniqueInput } from './permission-set-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PermissionSetScalarFieldEnum } from './permission-set-scalar-field.enum';

@ArgsType()
export class FindFirstPermissionSetOrThrowArgs {

    @Field(() => PermissionSetWhereInput, {nullable:true})
    @Type(() => PermissionSetWhereInput)
    where?: PermissionSetWhereInput;

    @Field(() => [PermissionSetOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PermissionSetOrderByWithRelationInput>;

    @Field(() => PermissionSetWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PermissionSetWhereUniqueInput, 'permissionSetId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PermissionSetScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PermissionSetScalarFieldEnum>;
}
