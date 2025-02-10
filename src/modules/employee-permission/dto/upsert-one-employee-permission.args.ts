import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EmployeePermissionWhereUniqueInput } from './employee-permission-where-unique.input';
import { Type } from 'class-transformer';
import { EmployeePermissionCreateInput } from './employee-permission-create.input';
import { EmployeePermissionUpdateInput } from './employee-permission-update.input';

@ArgsType()
export class UpsertOneEmployeePermissionArgs {

    @Field(() => EmployeePermissionWhereUniqueInput, {nullable:false})
    @Type(() => EmployeePermissionWhereUniqueInput)
    where!: Prisma.AtLeast<EmployeePermissionWhereUniqueInput, 'permissionId' | 'name'>;

    @Field(() => EmployeePermissionCreateInput, {nullable:false})
    @Type(() => EmployeePermissionCreateInput)
    create!: EmployeePermissionCreateInput;

    @Field(() => EmployeePermissionUpdateInput, {nullable:false})
    @Type(() => EmployeePermissionUpdateInput)
    update!: EmployeePermissionUpdateInput;
}
