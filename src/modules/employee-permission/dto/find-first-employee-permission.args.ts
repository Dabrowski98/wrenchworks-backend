import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EmployeePermissionWhereInput } from './employee-permission-where.input';
import { Type } from 'class-transformer';
import { EmployeePermissionOrderByWithRelationInput } from './employee-permission-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { EmployeePermissionWhereUniqueInput } from './employee-permission-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EmployeePermissionScalarFieldEnum } from './employee-permission-scalar-field.enum';

@ArgsType()
export class FindFirstEmployeePermissionArgs {

    @Field(() => EmployeePermissionWhereInput, {nullable:true})
    @Type(() => EmployeePermissionWhereInput)
    where?: EmployeePermissionWhereInput;

    @Field(() => [EmployeePermissionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EmployeePermissionOrderByWithRelationInput>;

    @Field(() => EmployeePermissionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EmployeePermissionWhereUniqueInput, 'permissionId' | 'name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EmployeePermissionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EmployeePermissionScalarFieldEnum>;
}
